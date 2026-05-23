import { Component , OnInit,OnChanges,DoCheck,OnDestroy, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,
OnDestroy ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
   // Parent → Child
  @Input()
  chatMessages: string[] = [];

  // Child → Parent
  @Output()
  messageEvent =
    new EventEmitter<string>();

  userInput = '';

  sendMessage() {

    if(this.userInput.trim()) {

      // Emit to parent
      this.messageEvent.emit(this.userInput);

      this.userInput = '';
    }
  }

  constructor() {
    console.log('Child constructor called');
   }
  ngOnChanges(): void {
    console.log('Child ngOnChanges called');
  }
  ngOnInit(): void {
    console.log('Child ngOnInit called');
  }
  ngOnDestroy(): void {
    console.log('Child ngOnDestroy called');
  }
  ngDoCheck(): void {
    console.log('Child ngDoCheck called');
  }
  ngAfterViewInit(): void {
    console.log('Child ngAfterViewInit called');
  }
  ngAfterContentChecked(): void {
    console.log('Child ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('Child ngAfterContentInit called');
  }
  ngAfterViewChecked(): void {
    console.log('Child ngAfterViewChecked called');
  }


}
