import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { CartService } from './../services/cart.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cliente-data-table',
  templateUrl: './cliente-data-table.component.html',
  styleUrls: ['./cliente-data-table.component.css']
})
export class ClienteDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = true;
  respuesta:any;
  index:number = 0;

  clientes:any = [{
    id: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    lugar: 0
  }]

   dtTrigger:Subject<any> = new Subject();

   constructor(private muService:MuServiceService, private common:CommonService, private router:Router, private cart:CartService) { 

    this.vista = this.common.vista;
    this.common.title = "Clientes";    

  }

  ngOnInit() {
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };    

    this.getClientes();

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

  getClientes(){
    this.muService.getClientes().subscribe(
      res => {
        this.clientes = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  gotoProductos(cliente:any){
    this.cart.idCliente = cliente.id;
    this.router.navigate(['/productos']);
  }

  gotoAgregarCliente(){
    this.router.navigate(['/cliente/add']);
  }

  eliminarLista(cliente:any){
    this.index = this.clientes.indexOf(cliente);
    this.clientes.splice(this.index, 1);
    this.rerender();
  }

  deleteCliente(cliente:any){
    this.muService.deleteCliente(cliente.id).subscribe(
      res => {
        console.log("Borrado exitoso");
        this.eliminarLista(cliente);
      },
      err => console.log("Error al tratar de eliminar al cliente")
    )
  }

}
