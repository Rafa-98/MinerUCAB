import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { CartService } from './../services/cart.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-aliados-data-table',
  templateUrl: './aliados-data-table.component.html',
  styleUrls: ['./aliados-data-table.component.css']
})
export class AliadosDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = true;
  respuesta:any;

  aliados:any = [{
    id: 0,
    nombre: '',
    creacion: '',
    inauguracion: '',
    lugar: ''
  }];
 
  dtTrigger:Subject<any> = new Subject();

  constructor(private muService:MuServiceService, private common:CommonService, private router:Router, private cart:CartService) { 

    this.common.vista = "Compra"
    this.vista = this.common.vista;
    this.common.title = "Aliados";    

  }

  ngOnInit() {
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.getAliados();

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

  getAliados(){
    this.muService.getAliados().subscribe(
      res => {
        this.aliados = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  gotoAgregarAliado(){

  }

  gotoInicio(){
    this.router.navigate(['/inicio']);
  }

  deleteAliado(aliado:any){

  }

  gotoMinerales(aliado:any){
    
    /*if(this.cart.indiceCompra == 0){
      this.cart.pedido[0].aliado = aliado.nombre;
    }
    else {
      this.cart.pedido.push({
        aliado: aliado.nombre,
        producto:'',
        presentacion:'',
        cantidad:0,
        costo:0
      })
    }*/


    this.cart.aliadoActual = aliado.nombre;
    this.cart.idAliadoActual = aliado.id;
    this.router.navigate(['/mineral/compra']);
  }

}
