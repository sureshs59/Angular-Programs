import { Component, OnChanges, OnDestroy, OnInit, AfterContentInit, DoCheck,
  AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from "./components/parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck,
OnDestroy ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
 
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
