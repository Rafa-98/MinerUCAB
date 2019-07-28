import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CartService } from './../services/cart.service';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  minerales:any = [{}];  
  monto:number = 0;
  
  constructor(private router:Router, private cart:CartService, private common:CommonService) { 

    this.common.title = "Shopping Cart";
    this.monto = this.cart.monto;

  }

  ngOnInit() {

    this.minerales = this.cart.minerales;

  }

  gotoProducts(){
    this.router.navigate(['productos']);
  }

  gotoPay(){
    this.common.vista = 'Pago';
    this.router.navigate(['/pago']);
  }

}
