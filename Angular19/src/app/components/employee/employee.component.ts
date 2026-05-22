import { Component,inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import { forkJoin, Observable } from 'rxjs';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  firstName = '';
  lastName = '';

  forkDetail1 :any[] = [];
  forkDetail2 :any[] = [];

  ngOnInit(){
    this.fetchDataInParallel().subscribe( ([data1, data2]) =>{
      this.forkDetail1 = data1;
      this.forkDetail2 = data2;
    }, error => {
      // This block is only reached if an error was NOT handled internally
      console.error(' ForkJoin failed ::',error.message);
      alert(' ForkJoin failed ::'+error.message);
    } 
     ) ;
  }
  // userSuresh = this.fetchUser();

  async fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return res.json();
  }

   http = inject(HttpClient);

   fetchDataInParallel() : Observable<[any, any]>{
     const fork1 =  this.http.get("https://jsonplaceholder.typicode.com/users");

     const fork2 =  this.http.get("https://jsonplaceholder.typicode.com/posts");

     return forkJoin(fork1, fork2);
   }
  //  fetchDataInParallel() : Observable<[any, any]>{
  //   const fork1 =  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe( (result: any) =>{
  //     alert('fork1...'+result.name);
  //   } );

  //   const fork2 =  this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe( (out:any) =>{
  //     alert('fork22...'+out.title);
  //   });

  //   alert(".fork1..."+fork1+"----"+fork2)
  //   return forkJoin(fork1, fork2);
  // }




}
