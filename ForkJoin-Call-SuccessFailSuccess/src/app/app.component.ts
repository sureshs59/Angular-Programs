import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuccessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'forkjoin-failSuccess';

  
  ngOnInit(){
    alert("Forkjoin called from parent..");
  }

}
