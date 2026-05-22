import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  userCount: number = 0;
  ordersCount: number = 0;

  constructor(private dataService: DataService) {
    this.ordersCount = this.dataService.getOrdersCount();
    this.userCount = this.dataService.getUserCount(); 
   }

   refreshData() {
    this.ordersCount = 500;
    this.userCount = 1000; 
   }

}
