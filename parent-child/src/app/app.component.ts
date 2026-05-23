import { Component, OnChanges, OnDestroy, OnInit, AfterContentInit, DoCheck,
  AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from "./components/parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, FormsModule, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck,
OnDestroy ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  // title = 'parent-child-flow';
  // data: string = 'Sending data from parent to child';
  // sendData: string = '';

  // chatHistory: { sender: string,text: string }[] = [];

  // sendDataToChild(userInput: string) {
  //   this.chatHistory.push({ sender: 'Parent', text: userInput });
  //   setTimeout(() => {
  //     this.chatHistory.push({ sender: 'Child', text: 
  //       `Received: ${userInput}` });
  //   }, 500);
  // }
  // receiveValue : string = '';

  // receiveData(data: string) {
  //   this.receiveValue = data;
  //   console.log('Data received from child:', data);
  // }

  constructor() {
    console.log('Parent constructor called');
   }

  ngOnChanges(): void {
    console.log('Parent ngOnChanges called');
   
  }
  ngOnInit(): void {
    console.log('Parent ngOnInit called');
  }  
  ngOnDestroy(): void {
    console.log('Parent ngOnDestroy called');
  }

  ngDoCheck(): void {
    console.log('Parent ngDoCheck called');
  }

  ngAfterViewInit(): void {
    console.log('Parent ngAfterViewInit called');
  }
  ngAfterContentChecked(): void {
    console.log('Parent ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('Parent ngAfterContentInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

}
