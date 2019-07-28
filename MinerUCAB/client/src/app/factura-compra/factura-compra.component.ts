import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { CartService } from './../services/cart.service';
import { MuServiceService } from './../services/mu-service.service';
import { async } from 'q';

@Component({
  selector: 'app-factura-compra',
  templateUrl: './factura-compra.component.html',
  styleUrls: ['./factura-compra.component.css']
})
export class FacturaCompraComponent implements OnInit {

  pedidos:any = [{
    /*nombre:'',
    presentacion:'',
    cantidad:0,
    precio:0*/
  }];

  respuesta:any;
  idPedido:any;
  idMinAlm:any;  

  i:number = 0;
  precioTotal:number = 0;
  
  constructor(private common:CommonService, private cart:CartService, private router:Router, private mu:MuServiceService) {

    this.common.title = "Factura";
    //this.llenar();
    this.pedidos = this.cart.pedido;


  }

  ngOnInit() {
  }  
  
  gotoMinerales(){
    this.router.navigate(['/mineral/compra']);
  }

  comprar(){
    console.log(this.cart.pedido);   
    this.mu.saveOrdenCompra({fecha:this.common.FechaHoy(), aliado:this.cart.idAliadoActual}).subscribe(
      res => {
        this.respuesta = res; // id de la Orden de Compra creada       
        this.guardarPedido();          
      },
      err => console.log(err)
    )    
  }

  guardarPedido(){
    this.mu.savePedido({cantidad: this.cart.pedido[this.i].cantidad, compra: this.respuesta[0].id, alimin: this.cart.pedido[this.i].aliMin}).subscribe(
      res => {
        this.idPedido = res;        
        this.obtenerMinAlm();        
      },
      err => console.log(err)
    )
  }

  obtenerMinAlm(){
    this.mu.getMinAlmByPedido(this.idPedido[0].id).subscribe(                
      res => {        
        this.idMinAlm = res;        
        this.guardarMovimiento();        
      },
      err => console.log(err)
    )
  }

  guardarMovimiento(){
    this.mu.saveMovimiento({cantidad: this.cart.pedido[this.i].cantidad, minalm:this.idMinAlm[0].id, compra:this.respuesta[0].id}).subscribe(
      res => {
        console.log("save successful");       
        this.i = this.i + 1;
        if (this.i < this.cart.pedido.length){                       
          this.guardarPedido();
        }
        else{
          console.log("terminado el trabajo");
          this.cart.pedido = [{}];
          this.router.navigate(['/inicio']);
        }
        //this.router.navigate(['/inicio']);
      },
      err => console.log(err)
    )
  }

}
