import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';

import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-menu-reportes',
  templateUrl: './menu-reportes.component.html',
  styleUrls: ['./menu-reportes.component.css']
})
export class MenuReportesComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 
  
  dtOptions: DataTables.Settings = {};

  vista:string = '';
  dia:string = '';
  mes:string = '';
  year:string = '';
  diaf:string = '';
  mesf:string = '';
  yearf:string = '';

  inicio:string = '';  //fecha de Inicio
  fin:string = '';    //fecha fin

  empleados:any = [{
    id: 0,
    nombre: '',
    apellido: '',
    salario: '',
    cargo: '',
    lugar:''
  }];

  dtTrigger:Subject<any> = new Subject();

  constructor(private common:CommonService, private mu:MuServiceService) { 

    this.common.title = "Reportes";
    this.vista = 'Reportes';    

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
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

  gotoReporte(reporte:string){
    switch(reporte){
      case '1':         
        break;
      case '2': 
        this.vista = '2';        
        break;
      case '3': 
        this.vista = '3';        
        break;
      case '4':           
        break;
      case '5': 
        this.vista = '5';        
        break;
      case '6': 
        this.vista = '6';        
        break;
      case '7': 
        this.getEmpleados();
        this.vista = '7';        
        break;
      case '8': 
        this.vista = '8';                  
        //this.reporte8();
        break;
      case '9':
        this.vista = '9';         
        break;   
      case '10': 
        this.vista = '10';        
        break;     
      default:break;
    }
  }

  getEmpleados(){
    this.mu.getEmpleados().subscribe(
      res => {
        this.empleados = res;
        this.dtTrigger.next();
      },
      err => console.log("hola")
    )
  }

  reporte2(){
    this.inicio = this.year+'-'+this.mes.split("-")[0]+'-'+this.dia;
    this.fin = this.yearf+'-'+this.mesf.split("-")[0]+'-'+this.diaf;
    document.getElementById('r2').setAttribute('href', "http://localhost:3000/api/reporte/2/"+this.inicio+"+"+this.fin);  
  }

  reporte3(){
    document.getElementById('r3').setAttribute('href', "http://localhost:3000/api/reporte/3/"+this.year+"-"+this.mesf.split("-")[0]);  
  }

  reporte5(){
    this.inicio = this.year+'-'+this.mes.split("-")[0]+'-'+this.dia;
    this.fin = this.yearf+'-'+this.mesf.split("-")[0]+'-'+this.diaf;
    document.getElementById('r5').setAttribute('href', "http://localhost:3000/api/reporte/5/"+this.inicio+"+"+this.fin);  
  }

  reporte6(){
    document.getElementById('r6').setAttribute('href', "http://localhost:3000/api/reporte/6/"+this.year+"-"+this.mesf.split("-")[0]);  
  }

  reporte7(empleado:any){
    this.inicio = this.year+'-'+this.mes.split("-")[0]+'-'+this.dia;
    this.fin = this.yearf+'-'+this.mesf.split("-")[0]+'-'+this.diaf;
    document.getElementById('r7').setAttribute('href', "http://localhost:3000/api/reporte/7/"+empleado.id+"+"+this.inicio+"+"+this.fin);  
  }

  reporte8(){
    document.getElementById('r8').setAttribute('href', "http://localhost:3000/api/reporte/8/"+this.year);
  }

  reporte9(){
    this.inicio = this.year+'-'+this.mes.split("-")[0]+'-'+this.dia;
    this.fin = this.yearf+'-'+this.mesf.split("-")[0]+'-'+this.diaf;
    document.getElementById('r9').setAttribute('href', "http://localhost:3000/api/reporte/9/"+this.inicio+"+"+this.fin);  
  }

  reporte10(){
    this.inicio = this.year+'-'+this.mes.split("-")[0]+'-'+this.dia;
    this.fin = this.yearf+'-'+this.mesf.split("-")[0]+'-'+this.diaf;
    document.getElementById('r10').setAttribute('href', "http://localhost:3000/api/reporte/10/"+this.inicio+"+"+this.fin);  
  }

}
