import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-empleado-data-table',
  templateUrl: './empleado-data-table.component.html',
  styleUrls: ['./empleado-data-table.component.css']
})
export class EmpleadoDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 
  
  dtOptions: DataTables.Settings = {};

  loading:boolean = true;
  vista:string = '';
  index:0;


  empleados:any = [{
    id: 0,
    nombre: '',
    apellido: '',
    salario: '',
    cargo: '',
    lugar:''
  }];

  dtTrigger:Subject<any> = new Subject();

  constructor(private common:CommonService, private mu:MuServiceService, private router:Router) {

    this.vista = this.common.vista;

   }

  ngOnInit() {
    this.common.title = "Empleados";
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.getEmpleados();
  }

  ngOnDestroy(): void {    
    this.dtTrigger.unsubscribe();
  }

  getEmpleados() {
    this.mu.getEmpleados().subscribe(
      res => {
        this.empleados = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  gotoAgregarEmpleado(){
    this.router.navigate(['/empleados/add']);
  }

  gotoTurnos(){
    this.router.navigate(['/turnos/list']);
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  eliminar(empleado:any){
    this.index = this.empleados.indexOf(empleado);
    console.log("index es: ", this.index);
    this.empleados.splice(this.index, 1);
    this.rerender();
  }

  eliminarEmpleado(empleado:any){
    this.mu.deleteEmpleado(empleado.id).subscribe(
      res => {        
        console.log("Borrado exitoso");
        this.eliminar(empleado);
      },
      err => console.log(err)
    )
  }

}
