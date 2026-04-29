import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';

// Child component that receives data from parent via @Input and sends events to parent via @Output.
@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [],
  templateUrl: './expense-item-component.html'
})
export class ExpenseItemComponent{

  // @Input — parent passes data DOWN to child

  //Angular 18 signal input: expense = input.required<Expense>() is 
  // the modern signal-based equivalent of @Input({ required: true }). 
  // It returns a read-only signal — read it in the template as expense().title.
  //1st way
  @Input({required:true}) expense!: AppComponent['expense'][number];

  //2nd way
  //expense = input.required<AppComponent['expense'][number]>();

   // @Output — child sends events UP to parent
  @Output() deleted = new EventEmitter<number>();

  onDelete() {
    this.deleted.emit(this.expense.id);
    // fire event with the id
  }
  
}
