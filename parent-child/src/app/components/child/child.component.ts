import { Component , OnInit,OnChanges,DoCheck,OnDestroy, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { FormsModule} from '@angular/forms';
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
  @Input() messageFromParent = '';

  // Child → Parent
  @Output() messageEvent = new EventEmitter<string>();

  childMessage = '';

  receivedMessage = '';

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['messageFromParent']) {
      this.receivedMessage = this.messageFromParent;
    }
    //alert("on changes.."+this.receivedMessage);
  }

   sendToParent() {
    if(this.childMessage.trim()) {
      this.messageEvent.emit(
        this.childMessage
      );
      //alert(this.childMessage);// = '';
    }
  }

  constructor() {
    console.log('Child constructor called');
   }
  // ngOnChanges(): void {
  //   console.log('Child ngOnChanges called');
  // }
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
