import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, combineLatest, debounceTime, distinctUntilChanged, forkJoin, map, mergeMap, of, shareReplay, switchMap, firstValueFrom } from 'rxjs';
import { MockApiService } from '../../services/mock-api.service';
import { CartStateService } from '../../state/cart-state.service';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { Order, Product, Profile, User } from '../../models/app.models';

@Component({
  selector: 'app-practice-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DiscountPipe],
  templateUrl: './practice-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticeDashboardComponent {
  searchControl = new FormControl('', { nonNullable: true });
  categoryControl = new FormControl('All', { nonNullable: true });

  user?: User;
  orders: Order[] = [];
  profile?: Profile;
  promiseResult = '';

  usersForTrackBy: User[] = [
    { id: 1, name: 'Suresh', email: 'suresh@test.com' },
    { id: 2, name: 'Anita', email: 'anita@test.com' },
    { id: 3, name: 'Raj', email: 'raj@test.com' }
  ];

  cartItems$ = this.cartState.cartItems$;

  cachedUser$ = this.api.getUser(1).pipe(
    shareReplay(1)
  );

  products$ = combineLatest([
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ),
    this.categoryControl.valueChanges
  ]).pipe(
    switchMap(([searchText, category]) =>
      this.api.searchProducts(searchText, category).pipe(
        catchError(() => of([]))
      )
    )
  );

  constructor(
    private api: MockApiService,
    private cartState: CartStateService
  ) {
    this.searchControl.setValue('');
    this.categoryControl.setValue('All');
  }

  loadParallelWithObservable(): void {
    forkJoin({
      user: this.api.getUser(1).pipe(catchError(() => of(null))),
      orders: this.api.getOrders(1).pipe(catchError(() => of([]))),
      profile: this.api.getProfile(1).pipe(catchError(() => of(null)))
    }).subscribe(result => {
      this.user = result.user ?? undefined;
      this.orders = result.orders;
      this.profile = result.profile ?? undefined;
    });
  }

  loadSequentialWithObservable(): void {
    this.api.getUser(1).pipe(
      switchMap(user => {
        this.user = user;
        return this.api.getOrders(user.id);
      })
    ).subscribe(orders => {
      this.orders = orders;
    });
  }

  async loadSequentialWithPromise(): Promise<void> {
    const user = await firstValueFrom(this.api.getUser(1));
    const orders = await firstValueFrom(this.api.getOrders(user.id));
    this.promiseResult = `Promise loaded ${user.name} with ${orders.length} orders`;
  }

  runMergeMapExample(): void {
    of(1, 2).pipe(
      mergeMap(userId => this.api.getUser(userId)),
      map(user => user.name)
    ).subscribe(name => console.log('mergeMap user:', name));
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  addProductToCart(product: Product): void {
    this.cartState.addItem(product);
  }

  clearCart(): void {
    this.cartState.clearCart();
  }
}
