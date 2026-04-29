import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User, UserService } from './services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'http-example';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  users: User[] = [];
  loading = false;
  errorMessage = '';

  loadUsers(): void {
    this.loading = true;
    this.errorMessage = '';   
  
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching users';
        this.loading = false;
      },
      complete: () => {
        console.log('User fetching completed');
      }
    });
  }
}
