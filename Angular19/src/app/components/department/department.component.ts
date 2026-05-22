import { Component, EventEmitter, OnInit, Output, output, ViewChild } from '@angular/core';
import { MasterComponent } from '../master/master.component';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [MasterComponent,FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{

  myMesg:string ="";

@Output() childMessage = new EventEmitter<string>();

@Output() chatChild = new EventEmitter<string>();

  ngOnInit(){
    
  }

  clickOn(){
    this.myMesg = "On";
  }

  clickOff(){
    this.myMesg = "Off";
  }

  sendMessage(){
    this.childMessage.emit("Hello this message coming from Child component that is Department..");
    alert('sending message to Parent...'+this.childMessage);
  }

  simpleChat(){
    this.chatChild.emit("Hello Bosssuuu");
  }

  onSubmit(form: NgForm){
      alert("form data:  "+form.value);
      console.log("form data:  "+form);
  }

}
