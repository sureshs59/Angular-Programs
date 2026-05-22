import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';
import { IRole } from '../../model/interface/role';
import { Observable } from 'rxjs';
import { IAddress } from '../../model/interface/IAddress';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  masterService = inject(MasterService);
  loader : boolean = true;
  addressDetails: IRole[] = [];

  ngOnInit(){

    const counter = signal(100);

    const do1 = signal(5);

    
    const total = computed( () => counter() * do1());

    alert("counter..."+total);
    do1.set(200);
    alert("counter..."+total);


     this.masterService.getAllUserDetails().subscribe( (result : any)=>{
        this.addressDetails = result;
        this.loader = false;
     },error =>{
       alert("Looks like error came "+error);
     } )
  }
  
}
