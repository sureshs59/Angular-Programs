import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://your-backend.com/api/auth';
 // private loggedIn$ =  new BehaviorSubject<Boolean>(this.hasToken());


  login( userName: string, password: string){
    this.http.post<LoginResponse>(`$this.apiUrl/login`,{userName,password}).pipe(
      tap()
    )
  }


  
}

interface LoginResponse{
  token :any;
}
