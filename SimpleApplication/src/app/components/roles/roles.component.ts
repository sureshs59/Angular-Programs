import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Observable } from 'rxjs';
import { MasterService } from '../../services/master.service';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  masterService = inject(MasterService);

  roleList: IRole[] = [];

  ngOnInit(){
    this.masterService.getMasterDetails().subscribe( (result:any)=>{
        this.roleList = result;
    }) 
  }

  
    
  
}
