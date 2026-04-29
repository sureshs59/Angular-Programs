import { Component } from '@angular/core';
import { ExpenseItemComponent } from "./expense-item/expense-item-component";

// Parent component that holds the state and passes data down to child components via @Input, and receives events from child components via @Output.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExpenseItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inputOutput-example';

 expense = [
    {id: 1, title: 'Gum', amount: 0.99, date: new Date(2023, 0, 1)},
    {id: 2, title: 'Rent', amount: 1000, date: new Date(2023, 0, 1)},
    {id: 3, title: 'Car Insurance', amount: 200, date: new Date(2023, 0, 1)},
    {id: 4, title: 'New Desk (Wooden)', amount: 450, date: new Date(2023, 0, 1)}
  ];

    // $event contains the id emitted by the child
    removeExpense(id: number) {
      this.expense = this.expense.filter(e => e.id !== id);
    }
}
