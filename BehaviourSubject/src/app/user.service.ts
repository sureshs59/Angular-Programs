import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Function	                            Purpose
//new BehaviorSubject()	                Create subject
//next()	                              Push new value
//asObservable()	                      Read-only observable
//value	                                Get latest value

export class UserService {

  // Initial value for the BehaviorSubject is set to 'Hello BehaviorSubject'
  private userSubject = new BehaviorSubject<string>('Hello BehaviorSubject');

  // Expose the userSubject as an observable to allow components to subscribe to it
  user$: Observable<string> = this.userSubject.asObservable();

  // Update value of the BehaviorSubject
  setUser(newUser: string) {
    this.userSubject.next(newUser);
  }
  // Get the current value of the BehaviorSubject
  getUser() {
    return this.userSubject.value;
  }
  // Reset the BehaviorSubject to its initial value
  resetUser() {
    this.userSubject.next('Hello BehaviorSubject');
  }


  constructor() { }
}
