import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUserCount(): number {
    // In real app, this would be an API call
    return 150;
  }
  getOrdersCount(): number {
    // In real app, this would be an API call
    return 75;
  }
  
}
