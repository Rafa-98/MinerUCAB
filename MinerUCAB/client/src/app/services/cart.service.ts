import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  monto:number = 0;  // Monto del carrito

  //------------------------------- PARA LA COMPRA -----------------------------------------------------------
  aliadoActual:string = '';
  idAliadoActual:number = 0;
  indiceCompra:number = 0;  
  
  pedido:any = [{
    aliado:'',   // nombre del aliado al que se le compra
    producto:'',  // mineral que se esta comprando
    presentacion:'',  // no sirve
    cantidad:0,   //cantidad en Kg del Mineral que se esta comprando
    costo:0,    //no sirve
    aliMin:0    //ID de la tabla aliMin a la que pertenece
  }]
  // ------------------------------------------------------------------------------------------------- ||

  //------------------------------- PARA LA VENTA -----------------------------------------------------------

  idCliente:number = 0;
  idOrdenVenta:number = 0;  
  indiceVenta:number = 0;
  indicePagos:number = 0;

  minerales:any = [{
    idMineral:0,
    mineral:'',
    idPresentacion:0,
    tipoPresentacion:'',
    cantPresentacion:0,   // se guarda en Fact_mineral, atributo: fm_cantidad
    idMinPre:0,  //se guarda en Fact_mineral, atributo: fk_mp_id
    costo:0  // se guarda en Min_Pre, atributo: mp_costo; costo a pagar por el Mineral-Presentación * cantidad
  }]

  pagos:any = [{
    tipo:'',
    monto:0,
    fecha:'',
    tipoPago:{
      banco:'',
      fecha:'',
      tipoTC:'',
      fechaV:'', // fecha de vencimiento
      numeroCuenta:'',
      tipoTD:''
    }
  }]

  // ------------------------------------------------------------------------------------------------- ||

  constructor() { }

  resetPedido(){
    this.pedido = [{
      aliado:'',   // nombre del aliado al que se le compra
      producto:'',  // mineral que se esta comprando
      presentacion:'',  // no sirve
      cantidad:0,   //cantidad en Kg del Mineral que se esta comprando
      costo:0,    //no sirve
      aliMin:0    //ID de la tabla aliMin a la que pertenece
    }]
  }

  resetMinerales(){
    this.minerales = [{
      idMineral:0,
      mineral:'',
      idPresentacion:0,
      tipoPresentacion:'',
      cantPresentacion:0,   // se guarda en Fact_mineral, atributo: fm_cantidad
      idMinPre:0,  //se guarda en Fact_mineral, atributo: fk_mp_id
      costo:0  // se guarda en Min_Pre, atributo: mp_costo; costo a pagar por el Mineral-Presentación * cantidad
    }]
  }

  resetPagos(){
    this.pagos = [{
      tipo:'',
      monto:0,
      fecha:'',
      tipoPago:{
        banco:'',
        fecha:'',
        tipoTC:'',
        fechaV:'', // fecha de vencimiento
        numeroCuenta:'',
        tipoTD:''
      }
    }]
  }

  resetAll(){
    this.resetPedido();
    this.resetMinerales();
    this.resetPagos();
  }
}

  
