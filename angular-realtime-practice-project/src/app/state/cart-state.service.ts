import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/app.models';

@Injectable({ providedIn: 'root' })
export class CartStateService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addItem(item: Product): void {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentItems, item]);
  }

  removeItem(id: number): void {
    const updatedItems = this.cartItemsSubject.value.filter(item => item.id !== id);
    this.cartItemsSubject.next(updatedItems);
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}
