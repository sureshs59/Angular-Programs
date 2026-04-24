import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {Observable, catchError, of, forkJoin } from 'rxjs';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [SuccessComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent implements OnInit{

  http = inject(HttpClient);

  ngOnInit(){
    this.getForkdataWithOnefailure();
  }

  myUsers: any[] = [];
  myAlbums: any[] = [];
  mycomments: any[] = [];

  getForkdataWithOnefailure() {
    const users$: Observable<any> = this.http.get("https://jsonplaceholder.typicode.com/users");
    
    const albums$: Observable<any> = this.http.get("https://jsonplaceholder.typicode.com/pipes").pipe(
      catchError( (error: HttpErrorResponse) => {
        console.log("Posts request failed, returning empty array as fallback-->"+error);
        // Return a new Observable with a fallback value to keep forkJoin alive
        return of([]);
      })
    );
    

    const comments$: Observable<any> = this.http.get("https://jsonplaceholder.typicode.com/photos");

    
    // forkJoin will wait for all, even the one with an internal catchError
    forkJoin(users$, albums$, comments$).subscribe({
      next:( [users ,posts, comments ]) => {
         this.myUsers = users;
         this.myAlbums = posts;
         this.mycomments = comments;
        alert("All parallel operations completed..");
        console.log(users);
        console.log(users.name);
        console.log(comments.name);
        console.log(comments.email);
        console.log(users.email);
        // alert("Users response."+users.propertyIsEnumerable.name);
        // alert("Albums response.."+posts);
        // alert("Comments response.."+comments.propertyIsEnumerable.toString);

      }, error :(err) =>{
           // This block is only reached if an error was NOT handled internally
           alert('This should not be called if inner catchError works--->'+err);
         }
    });

  }

}
