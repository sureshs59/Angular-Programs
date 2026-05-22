import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {

  userName: string = '';
  subscription !: Subscription;

    constructor(private userService: UserService) { 

    }

  ngOnInit() : void {
    // Subscribe to the user$ observable to get updates on the user name
    this.subscription = this.userService.user$.subscribe(
      (user) => {
        console.log('User name updated:', this.userName); // Log the updated user name to the console for debugging purposes
        this.userName = user; // Update the userName property with the latest value from the observable
        
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the user$ observable to prevent memory leaks when the component is destroyed
    this.subscription.unsubscribe();
  }

}
