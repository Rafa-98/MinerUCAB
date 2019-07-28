import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { PrivilegiosService } from './../services/privilegios.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-fase-data-table',
  templateUrl: './fase-data-table.component.html',
  styleUrls: ['./fase-data-table.component.css']
})
export class FaseDataTableComponent implements OnInit {
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  index:number = 0;
  vista:string = '';

  fases:any = [{
    id:0,
    numero:0,
    inicio:'',
    fin:'',
    etapa:0,
    explotacion:0,
    estatus:0,
    nombre:''
  }]

  dtTrigger:Subject<any> = new Subject();

  constructor(private muService:MuServiceService, private common:CommonService, private router:Router, private privi:PrivilegiosService) {

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
    this.muService.getFTer(this.common.idEtapaActual).subscribe( // obtener etapas terminados
      res => {
        this.fases = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  getEjecucion(){
    this.muService.getFEje(this.common.idEtapaActual).subscribe(  //obtener etapas en ejecución
      res => {
        this.fases = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  getPorIniciar(){
    this.muService.getFIni(this.common.idEtapaActual).subscribe(  //obtener etapas por iniciar
      res => {
        this.fases = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  eliminar(fase:any){    
      this.index = this.fases.indexOf(fase);
      console.log("index es: ", this.index);
      this.fases.splice(this.index, 1);
      this.rerender();         
  }

  deleteFase(fase:any){
    if(this.vista == 'Terminado' || this.vista == 'Ejecucion'){
      alert("Error. No se pueden eliminar proyectos que ya hayan Iniciado y/o Terminado");
    }
    else {
      this.muService.deleteFase(fase.id).subscribe(  
        res => {
          this.eliminar(fase);
        },
        err => console.log("error al obtener los roles")
      )
    }
  }

  iniciarFase(fase:any){
    this.muService.iniciarFase(fase.id).subscribe(  
      res => {
        this.eliminar(fase);
      },
      err => console.log("error al obtener los roles")
    )
  }

  terminarFase(fase:any){
    this.muService.terminarFase(fase.id).subscribe(  
      res => {
        this.eliminar(fase);
      },
      err => console.log("error al obtener los roles")
    )
  }

}
