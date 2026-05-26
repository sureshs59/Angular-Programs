import { Component, OnChanges, OnDestroy, OnInit, AfterContentInit, DoCheck,
  AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from "./components/parent/parent.component";
import { DataService } from './DataService.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, ParentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck,
OnDestroy ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
 
  constructor(private dataService: DataService) {
    console.log('Parent constructor called');
   }

   items: string[] = [];
   dataSub !: Subscription;

  ngOnChanges(): void {
    console.log('Parent ngOnChanges called');
   
  }
  ngOnInit(): void {
    // Subscribe to the observable in the service
    console.log('Parent ngOnInit called');
    this.dataService.getData().subscribe(data => {
      this.items = data;
    });

  }  
  ngOnDestroy(): void {
    // Always unsubscribe to prevent memory leaks!
    console.log('Parent ngOnDestroy called');
    this.dataSub.unsubscribe();
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
