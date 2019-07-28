import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-roles-data-table',
  templateUrl: './roles-data-table.component.html',
  styleUrls: ['./roles-data-table.component.css']
})
export class RolesDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  index:number = 0;

  roles:any = [{
    id:0,
    nombre:''
  }];

  dtTrigger:Subject<any> = new Subject();

  constructor(private muService:MuServiceService, private common:CommonService, private router:Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getRoles();
  }

  ngOnDestroy(): void {    
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  eliminar(rol:any){
    this.index = this.roles.indexOf(rol);
    console.log("index es: ", this.index);
    this.roles.splice(this.index, 1);
    this.rerender();
  }

  getRoles(){    
    this.muService.getRoles().subscribe(
      res => {
        this.roles = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  gotoAgregarRol(){
    this.router.navigate(['/rol/add']);
  }

  deleteRol(rol:any){
    this.muService.deleteRol(rol.id).subscribe(
      res => {
        this.eliminar(rol);                
      },
      err => console.log("error al obtener los roles")
    )
  }

  seePrivilegios(rol:any){    
    this.common.rolId = rol.id;
    this.common.rolNombre = rol.nombre;
    this.common.vista = 'rolPri';
    this.router.navigate(['/privilegios/list']);
  }

}
