import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { CommonService } from './../services/common.service';
import { ProyectoService } from './../services/proyecto.service';
import { MuServiceService } from './../services/mu-service.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maquina-project-dt',
  templateUrl: './maquina-project-dt.component.html',
  styleUrls: ['./maquina-project-dt.component.css']
})
export class MaquinaProjectDTComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  loading:boolean = true;

  vista:string = '';
  numeroEtapa:number = 0;
  numeroFase:number = 0;
  configuracion:string = '';
  indiceTipoMaquina:number = 0;
  nombreMaquinaNecesaria:string = '';
  cantidadMaquinas:number = 0;
  cantidadMaquinasAgregadas:number = 0;
  
  dtOptions: DataTables.Settings = {};

  maquinas:any = [{
    id:0,
    tipo_maquina:''
  }];

  dtTrigger:Subject<any> = new Subject();

  constructor(private router:Router, private common:CommonService, private proyecto:ProyectoService, private mu:MuServiceService) { 

    this.vista = this.common.vista;
    this.common.title = 'Etapa';
    this.numeroEtapa = this.proyecto.numeroEtapa;
    this.numeroFase = this.proyecto.numeroFase;
    this.nombreMaquinaNecesaria = this.proyecto.nombreMaquinaNecesaria;
    this.cantidadMaquinasAgregadas = 0;
    this.cantidadMaquinas = this.proyecto.cantidadMaquinas;

  }

  ngOnInit() {
    

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.obtenerDT_Maquinas();

  }

  ngOnDestroy(): void{
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

  obtenerDT_Maquinas(){
    this.mu.getMaquinasPorTipo(this.proyecto.resp[this.indiceTipoMaquina].id).subscribe(
      res => {
        this.maquinas = res;
        this.dtTrigger.next();
        this.indiceTipoMaquina = this.indiceTipoMaquina + 1;
      },
      err => console.log("ERROR al obtener maquinas segun su tipo")
    )
  }

}
