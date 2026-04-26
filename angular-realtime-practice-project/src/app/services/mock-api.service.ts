import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Order, Product, Profile, User } from '../models/app.models';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  private users: User[] = [
    { id: 1, name: 'Suresh', email: 'suresh@test.com' },
    { id: 2, name: 'Anita', email: 'anita@test.com' }
  ];

  private orders: Order[] = [
    { id: 101, userId: 1, product: 'Laptop', amount: 1200 },
    { id: 102, userId: 1, product: 'Mouse', amount: 25 },
    { id: 103, userId: 2, product: 'Keyboard', amount: 75 }
  ];

  private profiles: Profile[] = [
    { userId: 1, city: 'Detroit', membership: 'Gold' },
    { userId: 2, city: 'Chicago', membership: 'Silver' }
  ];

  private products: Product[] = [
    { id: 1, name: 'Angular Book', category: 'Books', price: 45 },
    { id: 2, name: 'Java Book', category: 'Books', price: 50 },
    { id: 3, name: 'Laptop', category: 'Electronics', price: 1100 },
    { id: 4, name: 'Mouse', category: 'Electronics', price: 25 }
  ];

  getUser(userId: number): Observable<User> {
    return of(this.users.find(u => u.id === userId) ?? this.users[0]).pipe(delay(500));
  }

  getOrders(userId: number): Observable<Order[]> {
    return of(this.orders.filter(o => o.userId === userId)).pipe(delay(700));
  }

  getProfile(userId: number): Observable<Profile> {
    return of(this.profiles.find(p => p.userId === userId) ?? this.profiles[0]).pipe(delay(400));
  }

  searchProducts(searchText: string, category: string): Observable<Product[]> {
    const text = searchText.toLowerCase();
    const result = this.products.filter(p =>
      p.name.toLowerCase().includes(text) &&
      (category === 'All' || p.category === category)
    );
    return of(result).pipe(delay(500));
  }
}
