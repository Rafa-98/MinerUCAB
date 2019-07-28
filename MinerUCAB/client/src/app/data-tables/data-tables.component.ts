import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

//Importando servicios
import { CommonService } from './../services/common.service';

import { Router } from '@angular/router';

import { MuServiceService } from './../services/mu-service.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.css']
})
export class DataTablesComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  vista:string = '';
  aliados:any = [{
    id: 0,
    nombre:'',
    creacion:'',
    inauguracion: '',
    lugar: ''
  }]

  dtTrigger:Subject<any> = new Subject();


  constructor(private muService:MuServiceService, private common:CommonService, private router:Router) {

    this.common.vista = "Compra";
    this.vista = this.common.vista;    


  }

  ngOnInit() {
    this.common.title = 'DataTable';
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getAliados();
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  getAliados(){
    this.muService.getAliados().subscribe(
      res => {
        this.aliados = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    )
  }

  backInicio(){
    this.router.navigate(['/inicio']);
  }

  irMinerales(){
    this.router.navigate(['/mineralPrueba']);
  }

}
