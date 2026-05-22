import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { DepartmentComponent } from './components/department/department.component';
import { MasterComponent } from './components/master/master.component';
import { counterReduce } from './store/counter.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MasterComponent, RouterLink, RouterLinkActive, DepartmentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19';


  parentVar = "";
  receiveMesg(inMessage: string){
    this.parentVar = inMessage;
  }
}


//StoreModule.forRoot( {count : counterReduce} )]