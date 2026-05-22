import { Component, inject, Input } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';
import {CommonModule} from '@angular/common';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../model/interface/IAppState';
import { Observable } from 'rxjs';
import { decrement, increment } from '../../store/counter.action';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent,RolesComponent,CommonModule, DepartmentComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComponent : string = "Roles";
  counter : number = 1;

  counter$ : Observable<number>;

  changeTab(tabName :string){
    this.currentComponent = tabName;
  }

constructor(private store: Store<IAppState>){
    this.counter$ = this.store.pipe(select('count'));
}

  doDecrement(){
    this.store.dispatch(decrement());
  }

  doIncrement(){
    //this.counter++; 
    this.store.dispatch(increment());
  }

  // @Input() parentVar:string = "";
  // receiveMesg(inMessage: string){
  //   alert("..."+inMessage);
  //   this.parentVar = inMessage;
  // }
}
