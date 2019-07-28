import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { PrivilegiosService } from './../services/privilegios.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-privilegio-data-table',
  templateUrl: './privilegio-data-table.component.html',
  styleUrls: ['./privilegio-data-table.component.css']
})
export class PrivilegioDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  index:number = 0;

  privilegios:any = [{
    id:0,
    nombre:''
  }];

  nopriv:any = [{
    id:0,
    nombre:''
  }]

  nombreRol:string = '';
  vista:string = '';

  dtTrigger:Subject<any> = new Subject();

  constructor(private muService:MuServiceService, private common:CommonService, private router:Router, private privi:PrivilegiosService) { 

    this.nombreRol = this.common.rolNombre;
    this.vista = this.common.vista;

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    if(this.common.vista == 'rolPri'){
      this.getrolPrivilegios();
    }
    else if(this.common.vista == 'AddPri'){
      this.getNoRolPri();  // me busca los privilegios que NO tiene un Rol
    }
    else{
      this.getPrivilegios();
    }
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
    if(this.vista == 'AddPri'){
      this.index = this.nopriv.indexOf(rol);
      console.log("index es: ", this.index);
      this.nopriv.splice(this.index, 1);
      this.rerender();
    }
    else {
      this.index = this.privilegios.indexOf(rol);
      console.log("index es: ", this.index);
      this.privilegios.splice(this.index, 1);
      this.rerender();
    }
    
  }

  getNoRolPri(){
    this.muService.getPrivilegiosNoRol(this.common.rolId).subscribe(
      res => {
        this.nopriv = res;
        console.log("lo que obtuvo: ",this.nopriv);
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }
  
  getrolPrivilegios(){
    this.muService.getrolPri(this.common.rolId).subscribe(
      res => {
        this.privilegios = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  getPrivilegios(){
    this.muService.getPrivilegios().subscribe(
      res => {
        this.privilegios = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  deletePrivilegio(privilegio:any){
    this.muService.deletePrivilegio({
      privilegio: privilegio.id,
      rol: this.common.rolId
    }).subscribe(
      res => {
        this.eliminar(privilegio);
      },
      err => console.log("error al obtener los roles")
    )
  }

  gotoAgregarPrivilegio(){
    this.common.vista = 'AddPri';
    this.vista = this.common.vista;
    this.getNoRolPri();
    //this.router.navigate(['/privilegios/list']);
  }

  addPrivilegio(privilegio:any){
    this.muService.saveRolPri({
      privilegio: privilegio.id,
      rol: this.common.rolId
    }).subscribe(
      res => {
        this.eliminar(privilegio);
        this.privi.evaluar(this.privi.idRolActual);
      },
      err => console.log("error al obtener los roles")
    )   
  }

}
