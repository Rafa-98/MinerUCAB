import { Component, OnInit } from '@angular/core';

import { MuServiceService } from './../services/mu-service.service';
import { CommonService } from './../services/common.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-procesada',
  templateUrl: './factura-procesada.component.html',
  styleUrls: ['./factura-procesada.component.css']
})
export class FacturaProcesadaComponent implements OnInit {

  vista:string = '';
  fecha:any;
  i:number = 0;
  show:boolean = false;
  total:number = 0;
  factura:number = 0;

  ordenesCompra:any = [{}];
  pedidos:any = [{
    alimin: 0,
    cantidad: 0,
    compra: 0,
    id: 0,
    mineral:''
  }];
  AlmCant:any = [{}];

  ordenesVenta:any = [{}];

  facturaMin:any = [{
    id:0,
    nombrem: '',
    cantidad: 0,
    kg: 0,
    tipo:'',
    mineral: 0,
    costo: 0,
    total: 0
  }]

  constructor(private mu:MuServiceService, private common:CommonService, private router:Router) { 
    this.common.title = "Facturas";
    this.vista = this.common.vista;
  }

  ngOnInit() {

    if (this.common.vista == "Compra"){
      this.getComprasProcesadas();
    }
    else if (this.common.vista == 'Venta'){
      this.getVentasProcesadas();
    }

  }

  getVentasProcesadas(){
    this.mu.getOrdenVentasRecibidas().subscribe(
      res => {
        this.ordenesVenta = res;        
        this.fecha = this.ordenesVenta[0].fecha.split("T");
        this.cambiarFormatoFecha(this.ordenesVenta);        
      },
      err => console.error(err)
    );
  }

  getComprasProcesadas(){
    this.mu.getOrdenComprasRecibidas().subscribe(
      res => {
        this.ordenesCompra = res;        
        this.fecha = this.ordenesCompra[0].fecha.split("T");
        this.cambiarFormatoFecha(this.ordenesCompra);        
      },
      err => console.error(err)
    );
  }

  cambiarFormatoFecha(ordenes:any){
    if (this.common.vista == 'Compra'){
      for(this.i = 0; this.i < ordenes.length; this.i = this.i +1) {
        console.log(this.i);
        this.ordenesCompra[this.i].fecha = this.ordenesCompra[this.i].fecha.split("T");
        console.log(this.ordenesCompra[this.i].fecha);
      }
    }
    else if (this.common.vista == 'Venta'){
      for(this.i = 0; this.i < ordenes.length; this.i = this.i +1) {
        console.log(this.i);
        this.ordenesVenta[this.i].fecha = this.ordenesVenta[this.i].fecha.split("T");
        console.log(this.ordenesVenta[this.i].fecha);
      }
    }
   }

   calcularMonto(){
    if(this.vista == 'Compra'){
      for (this.i = 0; this.i < this.pedidos.length; this.i = this.i + 1){
        this.total = this.total + Number(this.pedidos[this.i].cantidad);
       }
    }
    else if(this.vista == 'Venta'){
      for(this.i = 0; this.i < this.facturaMin.length; this.i = this.i + 1){
        this.total = this.total + Number(this.facturaMin[this.i].total);
      }
    }
   }

   getPedidos(id:number){
    this.factura = id;
    if (this.vista == 'Compra'){
      this.mu.getPedidosOC(id).subscribe(
        res => {
          this.pedidos = res;
          this.calcularMonto();
          this.show = true;        
          console.log(this.pedidos);
        },
        err => console.error(err)
      );
    }
    else if(this.vista == 'Venta'){
      this.mu.getPedidosOV(id).subscribe(
        res => {
          this.facturaMin = res;
          this.calcularMonto();
          this.show = true;        
          console.log(this.facturaMin);
        },
        err => console.error(err)
      );
    }
  }

  detalles(id:number){
    this.getPedidos(id);
  }

  volverFact(){
    this.common.vista = "Facturas";
    this.router.navigate(['/facturas']);
  }

}
