import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnDestroy {

  userCount$   = new BehaviorSubject<number>(0);
  usersCount$ = this.userCount$.asObservable();
  ordersCount$ = new BehaviorSubject<number>(0);
  orderCount$ = this.ordersCount$.asObservable();

  constructor(private dataService: DataService) {
    //  setInterval(() => {
       this.ordersCount$.next(this.dataService.getOrdersCount());
       this.userCount$.next(this.dataService.getUserCount()); 
    //  }, 1000); 
  }

   refreshData() {
    this.userCount$.next(this.userCount$.value + 10); // Simulate user count change
    this.ordersCount$.next(this.ordersCount$.value + 5); // Simulate order count change
   }

   ngOnDestroy(): void {
    console.log("Dashboard component is getting destroyed...");
   }

}
