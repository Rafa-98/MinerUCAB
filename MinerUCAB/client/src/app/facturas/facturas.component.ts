import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  constructor(private common:CommonService, private router:Router) { 
    this.common.title = "Facturas";
  }

  ngOnInit() {
  }

  gotoFactPen(vista:string){
    this.common.vista = vista;
    this.router.navigate(['/facturas/pendiente']);
  }

  gotoFactPro(vista:string){
    this.common.vista = vista;
    this.router.navigate(['/facturas/procesada']);
  }

}
