import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private userService: UserService) { }

  login() {
    this.userService.setUser('Suresh testing...');
  }
  logout() {
    this.userService.resetUser();
  }
}
