import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

//Importando los modelos
import { Metal } from './../models/metal';
import { NoMetal } from './../models/noMetal';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-minerales-data-table',
  templateUrl: './minerales-data-table.component.html',
  styleUrls: ['./minerales-data-table.component.css']
})
export class MineralesDataTableComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  vista:string = '';
  cantidad:number = 0;
  index:any = '';
  loading:boolean = true;
  respuesta:any;
  mineralId1:number = 0;
  mineralNombre1:string = '';
  mineralId2:number = 0;
  mineralNombre2:string = '';
  aComponer:boolean = false;
  created = false;

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

  constructor(private muService:MuServiceService, private common:CommonService, private router:Router) {

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
    this.getPresentaciones();    
    
    if (this.common.vista == "Compra"){
      this.getAliadoMinerales();
    }
    
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

  getMetales(){
    this.muService.getMetales().subscribe(
      res => {
        this.metales = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    )
  }

  getNoMetales(){
    this.muService.getNoMetales().subscribe(
      res => {
        this.noMetales = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    )
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

  gotoAgregarMineral(){
    this.router.navigate(['/minerales/add']);
  }

  eliminar(mineral:any){
    this.index = this.minerales.indexOf(mineral);
    console.log("index es: ", this.index);
    this.minerales.splice(this.index, 1);
    this.rerender();
  }

  deleteMineral(mineral:any){
    this.muService.deleteMineral(mineral.id).subscribe(
      res => {        
        console.log("Borrado exitoso");
        this.eliminar(mineral);
      },
      err => console.log(err)
    )   
  
    //this.eliminar(mineral);
  }

  gotoInicio(){    
    this.router.navigate(['/crud']);
  }

  getPresentaciones(){
    this.muService.getPresentaciones().subscribe(
      res => {
        this.presentaciones = res; 
        this.loading = false;       
      },
      err => console.log(err)
    )
  }

  asociar(id:number, costo:number){    
   
   
    if (this.vista == 'AsociarMP'){
      this.minPre[0].presentacion = this.presentacion[0].tipo.split('-')[0];
      this.minPre[0].costo = costo * this.presentacion[0].tipo.split(' ')[2];
      this.minPre[0].mineral = id;      
      this.muService.checkMinPre(this.minPre[0]).subscribe(
        res => {          
          this.respuesta = res;
          console.log("respuesta es: ", this.respuesta);
          if (this.respuesta == "Sin resultados"){
            console.log("no consiguio a nadie");
            this.muService.saveMinPre(this.minPre[0]).subscribe(
              res => {
                console.log("Exitoso!");
              },
              err => console.log(err)
            )
          }
          else{
            console.log("si consiguio respuesta");
            alert("Ya se tiene asociado dicho mineral con la presentación escogida");
          }
        },
        err => console.log(err)
      )
      
    }
    else if (this.vista == 'AsociarYM'){
      this.yacMin[0].mineral = id;
      this.yacMin[0].yacimiento = this.common.idYacimiento;
      console.log(this.yacMin[0]);
      this.muService.saveYacMin(this.yacMin[0]).subscribe(
        res => {
          console.log("Exitoso!");
        },
        err => console.log(err)
      )
    }
  }

  getAliadoMinerales(){
    this.muService.getAliadoMinerales(this.common.idAliado).subscribe(
      res => {
        this.aliadoMinerales = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    )
  }
  
  componer(mineral:any){
    if(this.aComponer == true){
      this.addComposicion(mineral);
    }
    else {
      this.mineralId2 = mineral.id;
      this.mineralNombre2 = mineral.nombre;
      this.eliminar(mineral);
      this.aComponer = true;
      //this.vista = 'aComponer';
    }            
  }

  addComposicion(mineral:any){
    this.mineralNombre1 = mineral.nombre;
    this.created = false;
    this.muService.createMinComposicion({
      cantidad:1,
      extraedor:mineral.id,
      extraido:this.mineralId2
    }).subscribe(
      res => {
        console.log("Relación creada exitosamente");
        this.created = true;
        this.eliminar(mineral);
      },
      err => console.log("Error al crear la composición")
    )
  }

}