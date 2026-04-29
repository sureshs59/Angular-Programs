import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input({required:true}) expense!: AppComponent['expense'][number];

   // @Output — child sends events UP to parent
  @Output() deleted = new EventEmitter<number>();

  onDelete() {
    this.deleted.emit(this.expense.id);
    // fire event with the id
  }
  
}
