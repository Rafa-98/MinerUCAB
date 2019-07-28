import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { CartService } from './../services/cart.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-maquina-data-table',
  templateUrl: './maquina-data-table.component.html',
  styleUrls: ['./maquina-data-table.component.css']
})
export class MaquinaDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = true;
  respuesta:any;  
  
  maquinas:any = [{
    id: 0,
    costo: 0,
    tipo: '',
    nombre: ''
  }];

  dtTrigger:Subject<any> = new Subject();

   constructor(private muService:MuServiceService, private common:CommonService, private router:Router, private cart:CartService) { 

    this.vista = this.common.vista;
    this.common.title = "Maquinaria";
   
  }

  ngOnInit() {
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.getMaquina();    

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

  getMaquina(){
    this.muService.getmaquinas().subscribe(
      res => {
        this.maquinas = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }
  
  deleteMaquina(maquina:any){

  }

  gotoAgregarMaquina(){
    this.router.navigate(['/maquina/add']);
  }

}
