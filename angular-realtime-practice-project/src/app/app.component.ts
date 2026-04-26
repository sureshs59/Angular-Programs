import { Component } from '@angular/core';
import { PracticeDashboardComponent } from './components/practice-dashboard/practice-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PracticeDashboardComponent],
  template: '<app-practice-dashboard />'
})
export class AppComponent {}
