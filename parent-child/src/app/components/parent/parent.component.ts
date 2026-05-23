import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
 messages: string[] = [];

  receiveMessage(message: string) {

    // User message
    this.messages.push("User: " + message);

    // Bot response
    const botReply =
      "Bot: You said -> " + message;

    this.messages.push(botReply);
  }
}
