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
  selector: 'app-mineral-compra',
  templateUrl: './mineral-compra.component.html',
  styleUrls: ['./mineral-compra.component.css']
})
export class MineralCompraComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  vista:string = '';
  cantidad:number = 0;

  minerales:any = [{
    id: 0,
    nombre: '',
    tipo: '',
    descripcion: '',
    conductividad: '',
    estado: '',
    costo: ''
  }]

  dtTrigger:Subject<any> = new Subject();

  constructor(private muService:MuServiceService, private common:CommonService, private router:Router, private cart:CartService) {

    this.vista = this.common.vista;
    this.vista = "Compra";

  }

  ngOnInit() {
    console.log("la vista dice que es: ",this.vista);  
    console.log(this.cart.idAliadoActual);
     
    this.common.title = "Minerales";
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getMinerales();
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
    console.log(this.cart.idAliadoActual);
    this.muService.getAliMinerales(this.cart.idAliadoActual).subscribe(
      res => {
        this.minerales = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    )
  }

  agregarMineral(mineral:any, cantidad:number){
    console.log("indice de compra es: ",this.cart.indiceCompra);    
    if (cantidad > 0){
      if (this.cart.indiceCompra == 0){
        this.cart.pedido[0].aliado = this.cart.aliadoActual;
        this.cart.pedido[0].producto = mineral.nombre;
        console.log("cantidad es: ", cantidad);
        this.cart.pedido[0].cantidad = cantidad; 
        console.log("Le voy a pasar el id: ", mineral.id);
        this.cart.pedido[0].aliMin = mineral.id;
      }
      else {
          console.log("No Le voy a pasar el id: ", mineral.id);
          this.cart.pedido.push({
          aliado: this.cart.aliadoActual,
          producto:mineral.nombre,
          presentacion:'',
          cantidad:cantidad,
          costo:0,
          aliMin:mineral.id
          })
      }
      this.cart.indiceCompra = this.cart.indiceCompra + 1;
    }
    
    console.log(this.cart.pedido);
    
  }

  FactPrev(){
    this.router.navigate(['/factura/compra']);
  }

}
