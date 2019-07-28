import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { PrivilegiosService } from './../services/privilegios.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ProyectoService } from './../services/proyecto.service';

@Component({
  selector: 'app-etapa-data-table',
  templateUrl: './etapa-data-table.component.html',
  styleUrls: ['./etapa-data-table.component.css']
})
export class EtapaDataTableComponent implements OnInit {
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  index:number = 0;
  vista:string = '';

  etapas:any = [{
    id:0,
    numero:0,
    nombre:'',
    inicio:''  
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
    this.muService.getETer(this.common.idProyecto).subscribe( // obtener etapas terminados
      res => {
        this.etapas = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  getEjecucion(){
    this.muService.getEEje(this.common.idProyecto).subscribe(  //obtener etapas en ejecución
      res => {
        this.etapas = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  getPorIniciar(){
    this.muService.getEIni(this.common.idProyecto).subscribe(  //obtener etapas por iniciar
      res => {
        this.etapas = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  eliminar(etapa:any){    
      this.index = this.etapas.indexOf(etapa);
      console.log("index es: ", this.index);
      this.etapas.splice(this.index, 1);
      this.rerender();         
  }

  deleteEtapa(etapa:any){
    if(this.vista == 'Terminado' || this.vista == 'Ejecucion'){
      alert("Error. No se pueden eliminar proyectos que ya hayan Iniciado y/o Terminado");
    }
    else {
      this.muService.deleteEtapa(etapa.id).subscribe(  
        res => {
          this.eliminar(etapa);
        },
        err => console.log("error al obtener los roles")
      )
    }
  }

  verFases(etapa:any){
    this.common.idEtapaActual = etapa.id;
    this.router.navigate(['/fases/list']);
  }

  editarEtapa(etapa:any){
    this.project.idEtapaActual = etapa.id;
    this.router.navigate(['/etapa/edit']);
  }

  iniciarEtapa(etapa:any){
    this.muService.iniciarEtapa(etapa.id).subscribe(  
      res => {
        this.eliminar(etapa);
      },
      err => console.log("error al obtener los roles")
    )
  }

  terminarEtapa(etapa:any){
    this.muService.terminarEtapa(etapa.id).subscribe(  
      res => {
        this.eliminar(etapa);
      },
      err => console.log("error al obtener los roles")
    )
  }

}
