import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, of, pipe } from 'rxjs';
import { APIResponseModel } from '../../model/interface/role';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  http = inject(HttpClient);
 
  masterService = inject(MasterService);
  loader : boolean = true;
  addressDetails: any;
  name: string = "";
  id: number=0;
loading : boolean = true;
error: string | null = null;
  objects: ObjectItem[] = [];
  ngOnInit(){

     this.masterService.getAllUserDetails().subscribe({ 
      next: (data) => {
        this.objects = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Failed to load data';
        this.loading = false;
        console.error('API error:', err);      }
    });
  }

  trackById(index: number, obj: ObjectItem): string {
    return obj.id; // or any unique identifier property of the item
  }
}

export interface Data {
  color?: string;
  capacity?: string;
  'CPU model'?: string;
  'Hard disk size'?: string;
   year?: number;
   price?: number;
   Description?: string;
   "Screen size"?: string;
   Generation?: string;
  "Strap Colour"?: string;
  "Case Size"?: string;
}

export interface ObjectItem {
  id: string;
  name: string;
  data: Data;
}
