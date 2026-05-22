import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from '../model/interface/IAddress';
import { APIResponseModel, IRole } from '../model/interface/role';
import { ObjectItem } from '../components/client/client.component';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

 http = inject(HttpClient);

 getAllUserDetails(): Observable<ObjectItem[]>{
     //return  this.http.get<APIResponseModel>("https://jsonplaceholder.typicode.com/users");

//     return  this.http.get<APIResponseModel>("https://api.freeprojectapi.com/api/CollegeProject/GetAllUsers");
      // this.http.post<APIResponseModel>
      // ("https://jsonplaceholder.typicode.com/users",{})
      // .subscribe( (result : APIResponseModel)=>{
      // },error =>{ 
      //   alert("Looks like error came "+error.error+"--->>>"+error);
      // });
     return this.http.get<ObjectItem[]>("https://api.restful-api.dev/objects");
   }

   getMasterDetails(): Observable<APIResponseModel[]>{
     return  this.http.get<APIResponseModel[]>("https://jsonplaceholder.typicode.com/users");

//     return  this.http.get<APIResponseModel>("https://api.freeprojectapi.com/api/CollegeProject/GetAllUsers");
      // this.http.post<APIResponseModel>
      // ("https://jsonplaceholder.typicode.com/users",{})
      // .subscribe( (result : APIResponseModel)=>{
      // },error =>{ 
      //   alert("Looks like error came "+error.error+"--->>>"+error);
      // });
//     return this.http.get<ObjectItem[]>("https://api.restful-api.dev/objects");
   }
}
