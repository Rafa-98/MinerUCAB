import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { ProyectoService } from './../services/proyecto.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-yacimiento-data-table',
  templateUrl: './yacimiento-data-table.component.html',
  styleUrls: ['./yacimiento-data-table.component.css']
})
export class YacimientoDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  loading:boolean = true;
  
  dtOptions: DataTables.Settings = {};

  vista:string = '';
  index:any = '';

  yacimientos:any = [{
    id_yac_min: 0,
    id: 0,
    nombre: '',
    size: '',
    tipo: '',
    origen: '',
    tipo_transporte: ''
  }];

  ordenVenta:boolean = false;
  cantCarbon:number = 0;
  
  idExplotacion:any = {
    cantidad:0,
    fecha: null,
    yac_min:0,
    orden_venta:null
  };

  idYacMin:any = {
    id:0,
    mineral:0,
    yacimiento:0
  }

  dtTrigger:Subject<any> = new Subject();

  constructor(private proyecto:ProyectoService, private muService:MuServiceService, private common:CommonService, private router:Router) { 
    
    if (this.common.crudVista == 'Proyectos'){
      this.common.vista = 'Explotar';
    }    
    this.vista = this.common.vista;
    console.log("Ahora vista es: ", this.vista);

  }

  ngOnInit() {

    this.ordenVenta = this.proyecto.ordenVenta;
    this.common.title = "Yacimientos";
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    if(this.vista == 'Explotar'){
      this.getYacMin();
    }
    else {
      this.getYacimientos(); 
    }
       

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

  getYacMin(){
    this.muService.getYacimientosYM().subscribe(
      res => {
        this.yacimientos = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  getYacimientos(){
    this.muService.getYacimientos().subscribe(
      res => {
        this.yacimientos = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  gotoAgregarYacimiento(){
    this.router.navigate(['/yacimientos/add']);
  }

  gotoMinerales(id:string){
    this.common.idYacimiento = id;
    this.router.navigate(['/minerales/list']);
  }

  eliminar(yacimiento: any){
    this.index = this.yacimientos.indexOf(yacimiento);
    console.log("index es: ", this.index);
    this.yacimientos.splice(this.index, 1);
    this.rerender();
  }

  deleteYacimiento(yacimiento: any){
    this.muService.deleteYacimiento(yacimiento.id).subscribe(
      res => {
        console.log("borrado exitoso");
        this.eliminar(yacimiento);
      },
      err => console.log(err)
    )
  }


  gotoCrearEtapa(yacimiento:any){
    //this.proyecto.idYacimientoExplotar = yacimiento.id;
    /*this.muService.getYacmin(this.proyecto.idYacimientoExplotar).subscribe(
      res => {
        this.idYacMin = res;        
        this.proyecto.idYacMinExplotar = this.idYacMin[0].id;       

        this.muService.saveExplotacion({
          cantidad: this.cantCarbon,
          
          yac_min: this.proyecto.idYacMinExplotar,
          orden_venta: ''
        }).subscribe(
          res => {
            this.idExplotacion = res;
            this.proyecto.idExplotacion = this.idExplotacion[0].id;
            console.log("id de la explotacion: ",this.proyecto.idExplotacion);
            this.common.vista = 'Proyecto';
            this.router.navigate(['/proyecto/etapa/add']);
          },
          err => console.log("error al crear la explotacion")
        )

      },
      err => console.log("Error al buscar Yac_Min")
    )    */

    this.proyecto.idYacMinExplotar = yacimiento.id_yac_min;
    console.log(this.proyecto.idYacMinExplotar);
      
    this.muService.saveExplotacion({
      cantidad: this.cantCarbon,      
      yac_min: this.proyecto.idYacMinExplotar,    
    }).subscribe(
      res => {
        this.idExplotacion = res;
        this.proyecto.idExplotacion = this.idExplotacion[0].id;
        console.log("id de la explotacion: ",this.proyecto.idExplotacion);
        this.common.vista = 'Proyecto';
        this.router.navigate(['/proyecto/etapa/add']);
      },
      err => console.log("error al crear la explotacion")
    )
   
  }
}
