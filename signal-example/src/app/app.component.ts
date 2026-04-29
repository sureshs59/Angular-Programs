import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//  signal() vs BehaviorSubject: Both hold a value that other parts of your code can react to. 
//     Signals are simpler — no subscribe(), no .next(), 
//     no unsubscribe(). 
//     Call the signal like a function to read it. 
//     Call .set() or .update() to change it. 


export class AppComponent {
  title = 'signal-example'; 

 // signal() — writable reactive value
  itemCount = signal(0);
  totalPrice = signal(0);

  // computed() — derived signal, auto-updates when dependencies change
  cartItems = computed( () => {
    this.itemCount() == 0 ? 'No items in cart' : `${this.itemCount()} items in cart`; 
  });

  addItem(price : number) {
    // update() receives current value and returns new value, auto-updates dependents
    this.itemCount.update( count => count + 1);
    this.totalPrice.update(p => p + price)
  }

  deleteItem(price : number) {
    this.itemCount.update( count => count - 1);
    this.totalPrice.update(p => p - price)
  }
  
  reset(){
    this.itemCount.set(0);
    this.totalPrice.set(0);
  }
}


