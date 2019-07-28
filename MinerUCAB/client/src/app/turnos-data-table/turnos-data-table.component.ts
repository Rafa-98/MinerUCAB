import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-turnos-data-table',
  templateUrl: './turnos-data-table.component.html',
  styleUrls: ['./turnos-data-table.component.css']
})
export class TurnosDataTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  vista:string = '';

  loading:boolean = true;

  turnos:any = [{
    id:0,
    dia:'',
    inicio:'',
    fin:''
  }];

  empTurno:any = [{

  }];

  dtTrigger:Subject<any> = new Subject();

  constructor(private common:CommonService, private mu:MuServiceService, private router:Router) {

    this.vista = this.common.vista;

   }

  ngOnInit() {

    this.common.title = 'Turnos';
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getTurnos();

  }

  ngOnDestroy(): void {    
    this.dtTrigger.unsubscribe();
  }

  getTurnos() {
    this.mu.getTurnos().subscribe(
      res => {
        this.turnos = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  addEmpTurno(turno:any) {
    /*this.mu.saveEmpTurno(this.empTurno[0]).subscribe(
      res => {
        
      },
      err => console.log(err)
    )*/
  }

  gotoAgregarTurno(){
    this.router.navigate(['/turno/add']);
  }

  finalizar(){
    this.router.navigate(['/inicio']);
  }

}
