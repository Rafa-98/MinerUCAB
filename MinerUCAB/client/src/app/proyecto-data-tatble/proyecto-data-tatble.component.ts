import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { PrivilegiosService } from './../services/privilegios.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ProyectoService } from './../services/proyecto.service';

@Component({
  selector: 'app-proyecto-data-tatble',
  templateUrl: './proyecto-data-tatble.component.html',
  styleUrls: ['./proyecto-data-tatble.component.css']
})
export class ProyectoDataTatbleComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  index:number = 0;
  vista:string = '';

  proyectos:any = [{
    id:0,
    cantidad:0,
    fecha:'',
    yac_min:0,
    orden_venta:0
  }]; 

  dtTrigger:Subject<any> = new Subject();

  constructor(private project:ProyectoService, private muService:MuServiceService, private common:CommonService, private router:Router, private privi:PrivilegiosService) {

    this.vista = this.common.vista;
   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    if(this.vista == 'Terminado'){
      this.getTerminados();
    }
    else if(this.vista == 'Ejecucion'){
      this.getEjecucion();
    }
    else if(this.vista == 'Por iniciar'){
      this.getPorIniciar();
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

  getTerminados(){
    this.muService.getPTer().subscribe( // obtener poryectos terminados
      res => {
        this.proyectos = res;
        this.dtTrigger.next();
        console.log("se trajo: ",this.proyectos[0].id);
      },
      err => console.log("error al obtener los roles")
    )
  }

  getEjecucion(){
    this.muService.getPEje().subscribe(  //obtener proyectos en ejecución
      res => {
        this.proyectos = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  getPorIniciar(){
    this.muService.getPIni().subscribe(  //obtener proyectos por iniciar
      res => {
        this.proyectos = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  eliminar(proyecto:any){    
      this.index = this.proyectos.indexOf(proyecto);
      console.log("index es: ", this.index);
      this.proyectos.splice(this.index, 1);
      this.rerender();         
  }

  deleteProyecto(proyecto:any){
    if(this.vista == 'Terminado' || this.vista == 'Ejecucion'){
      alert("Error. No se pueden eliminar proyectos que ya hayan Iniciado y/o Terminado");
    }
    else {
      this.muService.deleteProyecto(proyecto.id).subscribe(  //obtener proyectos por iniciar
        res => {
          this.eliminar(proyecto);
        },
        err => console.log("error al obtener los roles")
      )
    }
  }

  EditarProyecto(project:any){
    this.project.idExplotacion = project.id;
    this.router.navigate(['/proyecto/edit'])
  }

  verEtapas(project:any){
    this.common.idProyecto = project.id;
    this.router.navigate(['/etapas/list']);
  }

  iniciarProyecto(proyecto:any){
    this.muService.iniciarProyecto(proyecto.id).subscribe(  
      res => {
        this.eliminar(proyecto);
      },
      err => console.log("error al obtener los roles")
    )
  }

  terminarProyecto(proyecto:any){
    this.muService.terminarProyecto(proyecto.id).subscribe(  
      res => {
        this.eliminar(proyecto);
      },
      err => console.log("error al obtener los roles")
    )
  }

}
