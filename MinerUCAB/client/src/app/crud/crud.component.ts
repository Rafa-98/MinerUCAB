import { Component, OnInit } from '@angular/core';

import { CommonService } from './../services/common.service'

import { Router } from '@angular/router';

import { PrivilegiosService } from './../services/privilegios.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  vista:string = '';

  constructor(private common:CommonService, private router:Router, private privilegios:PrivilegiosService) { }

  ngOnInit() {
    this.vista = this.common.crudVista;    
    this.common.title = "CRUD";
    console.log("La CRUD vista es: ",this.common.crudVista);
    console.log("La vista es: ", this.vista);
  }

  gotoConsulta(){
    if(this.privilegios.consultar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.common.vista = '';
      if (this.common.crudVista === "Minerales"){
        this.router.navigate(['/minerales/list']);
      }
      else if(this.common.crudVista === "Empleados"){
        this.router.navigate(['/empleados/list']);
      }
      else if(this.common.crudVista === "Usuarios"){
        this.router.navigate(['/usuarios/list']);
      }
      else if(this.common.crudVista === "Yacimientos"){
        this.router.navigate(['/yacimientos/list']);
      }
      else if(this.common.crudVista === "Maquinas"){
        this.router.navigate(['/maquinas/list']);
      }
      else if(this.common.crudVista === "Clientes"){
        this.router.navigate(['/clientes/list']);
      }
      else if(this.common.crudVista === "Roles"){
        this.router.navigate(['/roles/list']);
      }
      else if(this.common.crudVista === "Proyectos"){
        this.vista = 'ProyectosC';
      }
    }
  }

  gotoAgrega(){
    if(this.privilegios.insertar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.common.vista = '';
      if (this.common.crudVista === "Minerales"){
        this.router.navigate(['/minerales/add']);
      }
      else if(this.common.crudVista === "Empleados"){
        this.router.navigate(['/empleados/add']);
      }
      else if(this.common.crudVista === "Usuarios"){
        this.router.navigate(['/usuarios/add']);
      }
      else if(this.common.crudVista === "Yacimientos"){
        this.router.navigate(['/yacimientos/add']);
      }
      else if(this.common.crudVista === "Clientes"){
        this.router.navigate(['/cliente/add']);
      }
      else if(this.common.crudVista === "Maquinas"){
        this.router.navigate(['/maquinas/add']);
      }
      else if(this.common.crudVista === "Proyectos"){
        this.router.navigate(['/yacimientos/list']);
      }
      else if(this.common.crudVista === "Roles"){
        this.router.navigate(['/rol/add']);
      }
    }
  }  

  gotoVender(){
    if(this.privilegios.vender == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.common.vista = "Venta";
      this.router.navigate(['/clientes/list']);
    }
  }

  gotoComprar(){

  }

  gotoAsociar(){ 
    if(this.privilegios.insertar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      if (this.common.crudVista === 'Minerales'){
        this.common.vista = 'AsociarMP';
        this.router.navigate(['/minerales/list']);
      }
      else if (this.common.crudVista === 'Yacimientos'){
        this.common.vista = 'AsociarYM';
        this.router.navigate(['/yacimientos/list']);
      }
      else if (this.common.crudVista === 'Empleados'){
        this.common.vista = 'AsociarEH';
        this.router.navigate(['/empleados/list']);
      }
    }
  }

  gotoComponer(){
    if(this.privilegios.insertar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.common.vista = 'ComponerMM';
      this.router.navigate(['/minerales/list']);
    }
  }

  gotoExplotar(){
    if(this.privilegios.crear_proyecto == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.common.vista = 'Explotar';
      this.router.navigate(['/yacimientos/list']);
    }
  }

  gotoFactP(){
    if(this.privilegios.consultar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
      this.router.navigate(['/facturas/pendiente']);
    }
  }

  cambiaVista(){
    this.vista = 'Roles';
    this.common.crudVista = 'Roles';
  }

  gotoConsultaP(tipo:string){
    this.common.vista = tipo;
    this.router.navigate(['/proyectos/list']);
    /*if(tipo == "Terminado"){
      
    }
    else if(tipo == "Ejecucion"){

    }
    else if(tipo == "Por Iniciar"){

    }*/
  }

}
