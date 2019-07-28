import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { CartService } from './../services/cart.service';
import { PrivilegiosService } from './../services/privilegios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  hoy:Date;

  constructor(private common:CommonService, private router:Router, private cart:CartService, private privilegios:PrivilegiosService) {

    this.hoy = new Date();
    /*console.log("dia: ", this.hoy.getDate());
    console.log("mes: ", this.hoy.getMonth());
    console.log("año: ", this.hoy.getFullYear());
    console.log("fecha devuelta: ", this.common.FechaHoy());*/
   }

  ngOnInit() {    
    this.common.title = 'Inicio'; 
    this.cart.resetAll();
    this.privilegios.evaluar(this.privilegios.idRolActual);
  }

  gotoProducts(){
    if(this.privilegios.consultar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.router.navigate(['/productos'])
    }
  }

  gotoReports(){
    if(this.privilegios.generar_reporte == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else
      this.router.navigate(['/reportes']);
  }

  gotoBuy(){
    if(this.privilegios.comprar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.common.vista = "Compra";
      this.common.title = "Compra de Minerales";
      this.router.navigate(['/aliados/list']);
    }
  }

  gotoCRUD(vista:string){
    this.common.crudVista = vista;    
    this.router.navigate(['/crud']);
  }

  gotoSell(){
    if(this.privilegios.vender == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.common.vista = 'Venta';
      this.router.navigate(['/clientes/list']);
    }
  }

  gotoFact(vista:string){
    if(this.privilegios.consultar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.common.vista = vista;
      this.router.navigate(['/facturas']);
    }
  }

}
