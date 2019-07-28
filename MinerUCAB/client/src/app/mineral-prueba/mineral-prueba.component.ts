import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

//Importando los modelos
import { Metal } from './../models/metal';
import { NoMetal } from './../models/noMetal';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { CartService } from './../services/cart.service'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-mineral-prueba',
  templateUrl: './mineral-prueba.component.html',
  styleUrls: ['./mineral-prueba.component.css']
})
export class MineralPruebaComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  vista:string = '';
  cantidad:number = 0;
  index:any = '';
  loading:boolean = true;
  respuesta:any;

  minerales:any = [{
    id: 0,
    nombre: '',
    tipo: '',
    descripcion: '',
    conductividad: '',
    estado: '',
    costo: ''
  }]

  metales:any = [{
    id: 0,
    nombre: '',
    tipo: '',
    descripcion: '',
    conductividad: ''
  }];

  noMetales:any = [{
    id: 0,
    nombre: '',
    tipo: '',
    descripcion: '',
    estado: ''
  }];

  presentacion:any = [{
    id: 0,
    tipo: '',
    cantidad: '',
    descripcion: ''
  }];

  presentaciones:any = [{
    id: 0,
    tipo: '',
    cantidad: '',
    descripcion: ''
  }];

  minPre:any = [{
    mineral: 0,
    presentacion: 0,
    costo: 0 
  }];

  yacMin:any = [{
    id: 0,
    mineral: '',
    yacimiento: ''
  }];

  aliadoMinerales:any = [{

  }]

  dtTrigger:Subject<any> = new Subject();

  constructor(private muService:MuServiceService, private common:CommonService, private router:Router, private cart:CartService) {

    this.vista = this.common.vista;    

  }

  ngOnInit() {
    console.log("la vista dice que es: ",this.vista);
    this.loading = true;    
    this.common.title = "Minerales";
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    //this.getMetales();
    this.getMinerales();
    //this.getNoMetales();    
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

  

  getMinerales(){
    this.muService.getMinerales().subscribe(
      res => {
        this.minerales = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    )
  }

  agregarMineral(mineral:any){
    if (this.cart.indiceCompra == 0){
      this.cart.pedido[0].mineral = mineral.nombre;
      console.log(this.cart.pedido[0]);
    }
    
  }

  


}


