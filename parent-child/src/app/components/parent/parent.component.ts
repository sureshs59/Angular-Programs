import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  // Message sent to child
  parentMessage = '';

  // Messages display
  chatHistory: string[] = [];

  sendToChild() { 
    if(this.parentMessage.trim()) {
      this.chatHistory.push(
        'Parent: ' + this.parentMessage
      );
    }
  }

   // Receive from child
  receiveFromChild(message: string) {
    //alert('receiveFromChild..' + message);
    this.chatHistory.push(
      'Child: ' + message
    );
    //alert('chatHistory..' + this.chatHistory.length+"---"+this.chatHistory);
    
  }
}
