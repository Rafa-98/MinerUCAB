import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MuServiceService } from './../services/mu-service.service';
import { CommonService } from './../services/common.service';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-factura-pendiente',
  templateUrl: './factura-pendiente.component.html',
  styleUrls: ['./factura-pendiente.component.css']
})
export class FacturaPendienteComponent implements OnInit {

  vista:string = '';
  factura:number = 0;
  total:number = 0;
  caso:string = 'Agregar';
  tipo:string = 'tipo';
  edit:boolean = false;
  desactivar:boolean = null;
  fecha:any;
  i:number = 0;
  primerPedido:boolean = true;
  show:boolean = false;
  necesario:number = 0;
  productoActual:string = '';
  aliMinActual:number = 0;


  ordenesCompra:any = [{}];
  ordenesVenta:any = [{}];
  pedidos:any = [{
    alimin: 0,
    cantidad: 0,
    compra: 0,
    id: 0,
    mineral:''
  }];

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
  
  AlmCant:any = [{}];

  cantidades:any = [{
    id:0, //id del movimiento
    movcant:0,
    minalm:0, // id del Min_Alm
    minalmcant:0
  }];
  haySuficiente:boolean = true;

  constructor(private cart:CartService, private activatedRouter:ActivatedRoute, private router:Router, private mu:MuServiceService, private common:CommonService) { 

    this.common.title = "Facturas";
    this.vista = this.common.vista;

  }

  ngOnInit() {

    if (this.common.vista == "Compra"){
      this.getComprasPendientes();
    }
    else if(this.common.vista == 'Venta') {
      this.getVentasPendientes();
    }
    
    
  }

  getVentasPendientes(){
    this.mu.getOrdenVentasPendientes().subscribe(
      res => {
        this.ordenesVenta = res;
        console.log(this.ordenesVenta);
        this.fecha = this.ordenesVenta[0].fecha.split("T");
        this.cambiarFormatoFecha(this.ordenesVenta);
        /*for(this.i = 0; this.i < this.ordenesCompra.length; this.i = this.i + 1){
          this.getPedidos(this.ordenesCompra[this.i].id);
        }*/
      },
      err => console.error(err)
    );
  }

  getComprasPendientes(){
    this.mu.getOrdenComprasPendientes().subscribe(
      res => {
        this.ordenesCompra = res;        
        this.fecha = this.ordenesCompra[0].fecha.split("T");
        this.cambiarFormatoFecha(this.ordenesCompra);
        /*for(this.i = 0; this.i < this.ordenesCompra.length; this.i = this.i + 1){
          this.getPedidos(this.ordenesCompra[this.i].id);
        }*/
      },
      err => console.error(err)
    );
  }

  cambiarFormatoFecha(ordenes:any){
    console.log("entro a cambiar formato de fecha");
   for(this.i = 0; this.i < ordenes.length; this.i = this.i +1) {
      console.log("La i es: ",this.i);
      if (this.vista == 'Compra'){
        this.ordenesCompra[this.i].fecha = this.ordenesCompra[this.i].fecha.split("T");
        console.log(this.ordenesCompra[this.i].fecha);
      }
      else if(this.vista == 'Venta'){
        this.ordenesVenta[this.i].fecha = this.ordenesVenta[this.i].fecha.split("T");
        console.log(this.ordenesVenta[this.i].fecha);
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

  generarCompra(){    
    //Tengo la cantidad que debo comprar almacenada en la variable necesario
    this.cart.resetPedido();
    this.cart.idAliadoActual = 3;
    this.cart.pedido[0].aliado = 'MINVEN';
    this.cart.pedido[0].producto = 'Virita';
    this.cart.pedido[0].presentacion = '';
    this.cart.pedido[0].cantidad = this.necesario;
    this.cart.pedido[0].costo = 0;
    this.cart.pedido[0].aliMin = 9;
    for(this.i = 1; this.i < 4; this.i = this.i + 1){
      if(this.i == 1){
        this.productoActual = 'Fusita';
        this.aliMinActual = 10;
      }
      else if (this.i == 2){
        this.productoActual = 'Clarita';
        this.aliMinActual = 11;
      }
      else if(this.i == 3){
        this.productoActual = 'Durita';
        this.aliMinActual = 12;
      }
      this.cart.pedido.push({
        aliado:'MINVEN',   // nombre del aliado al que se le compra
        producto:this.productoActual,  // mineral que se esta comprando
        presentacion:'',  // no sirve
        cantidad:this.necesario,   //cantidad en Kg del Mineral que se esta comprando
        costo:0,    //no sirve
        aliMin:this.aliMinActual
      })
    }
    this.router.navigate(['/factura/compra']);
    
  }

  comparar(){
    for(this.i = 0; this.i < this.cantidades.length; this.i = this.i + 1){
      console.log(Number(this.cantidades[this.i].movcant) + ' > '+this.cantidades[this.i].minalmcant);
      if (Number(this.cantidades[this.i].movcant) > this.cantidades[this.i].minalmcant){
        this.haySuficiente = false;
        this.necesario = Number(this.cantidades[this.i].movcant) - this.cantidades[this.i].minalmcant;        
      }
    }
  }

  recibir(id:number){ //el id, es el id de la OC o de la OV, dependiendo del caso
    if(this.vista == 'Compra'){
      console.log("El id pasado es: ", id);    
      this.mu.cambiarEstatusOC(id).subscribe(
        res => {
          this.mu.cambiarEstatusMovimiento(id).subscribe(
            res => {
              console.log("El Arreglo de AlmCant devuelto es: ", this.AlmCant);
              this.AlmCant = res;
              this.i = 0;
              this.actualizarCantidades({
                almacen: this.AlmCant[this.i].almacen,
                cantidad: this.AlmCant[this.i].cantidad
              });
            }
          )
        },
        err => console.error(err)
      );
    }
    else if (this.vista == 'Venta'){
      this.mu.obtenerCantidades(id).subscribe(
        res => {
          this.cantidades = res;
          console.log("devuelve: ",this.cantidades);
          this.comparar();
          if (this.haySuficiente){  //Si hay suficiente para vender entonces...
            console.log("Hay suficiente para ventes :D");
            this.mu.cambiarEstatusOV(id).subscribe(
              res => {
                this.mu.cambiarEstatusMovimientoOV(id).subscribe(
                  res => {
                    console.log("El Arreglo de AlmCant devuelto es: ", this.AlmCant);
                    this.AlmCant = res;
                    this.i = 0;
                    this.actualizarCantidades({
                      almacen: this.AlmCant[this.i].almacen,
                      cantidad: this.AlmCant[this.i].cantidad
                    });
                  },
                  err => console.error(err)
                )
              },
              err => console.error(err)
            )
          }
          else {
            this.generarCompra();
          }
        },
        err => console.error(err)
      )
    }
  }

  actualizarCantidades(body:any){
    if (this.vista == 'Compra'){
      this.mu.actualizarAlmacen(body).subscribe(
        res => {
          this.i = this.i + 1;
          if (this.i < this.AlmCant.length){
            this.actualizarCantidades({
              almacen: this.AlmCant[this.i].almacen,
              cantidad: this.AlmCant[this.i].cantidad
            });
          }
          else {
            console.log("TERMINADO");
          }
        }
      )
    }
    else if (this.vista == 'Venta'){
      this.mu.disminuirAlmacen(body).subscribe(
        res => {
          this.i = this.i + 1;
          if (this.i < this.AlmCant.length){
            this.actualizarCantidades({
              almacen: this.AlmCant[this.i].almacen,
              cantidad: this.AlmCant[this.i].cantidad
            });
          }
          else {
            console.log("TERMINADO");
          }
        }
      )
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

  VolverFact(){    
    this.router.navigate(['/facturas']);
  }

}
