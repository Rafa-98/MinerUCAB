import { Component, OnInit } from '@angular/core';

//importando el gestor de vistas
import { Router } from '@angular/router';

//Importando Servicios
import { CommonService } from './../services/common.service';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  title:string = '';
  carrito:number = 0;

  pedidos:any = [{}];

  constructor(private router:Router, private common:CommonService, private cart:CartService) {

    this.carrito = this.cart.monto;

   }

  ngOnInit() { 
    this.title = this.common.title;    
  }

  exLogout(){
    this.common.loggedIn = false;
    this.router.navigate(['/login']);
  }

}


//https://ekiketa.es/obtener-la-fecha-actual-en-javascript/