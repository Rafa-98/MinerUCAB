import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { CommonService } from './../services/common.service';
import { ProyectoService } from './../services/proyecto.service';
import { MuServiceService } from './../services/mu-service.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-project-dt',
  templateUrl: './empleado-project-dt.component.html',
  styleUrls: ['./empleado-project-dt.component.css']
})
export class EmpleadoProjectDTComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  indiceCargoEmpleado:number = 0;
  cantidadEmpleados:number = 0;
  nombreCargoNecesario:string='';
  cantidadEmpleadosAgregados:number = 0;
  idExplotacion:number = 0;
  idEtapaActual:number = 0;
  idFaseActual:number = 0;

  resp:any = [{
    id:0,
    nombre:'',
    cantidad:0
  }];

  resp2:any = [{
    id:0,
    cargo:'',
    cantidad:0
  }];

  index:number = 0;

  empleados:any = [{
    id:0,
    nombre:'',
    apellido:'',
    cargo:'',
    costo:0
  }]

  dtTrigger:Subject<any> = new Subject();

  constructor(private router:Router, private common:CommonService, private proyecto:ProyectoService, private mu:MuServiceService) { 

    this.indiceCargoEmpleado = this.proyecto.indiceCargoEmpleado;
    this.cantidadEmpleados = this.proyecto.cantidadEmpleados;
    this.nombreCargoNecesario = this.proyecto.nombreCargoNecesario;
    this.cantidadEmpleadosAgregados = this.proyecto.cantidadEmpleadosAgregados;
    this.idExplotacion = this.proyecto.idExplotacion;
    this.idEtapaActual = this.proyecto.idEtapaActual;
    this.idFaseActual = this.proyecto.idFaseActual;
    this.resp2 = this.proyecto.resp2;

  }

  ngOnInit() {

    console.log("cantidad empleados: ",this.proyecto.cantidadEmpleados);
    console.log("cantidad empleados local: ",this.cantidadEmpleados);

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    }; 
    this.obtenerDT_Empleados();
    //console.log("EMpleados es: ",this.proyecto.empleados);
    //this.empleados = this.proyecto.empleados;
    //this.dtTrigger.next();    

  }

  ngOnDestroy(): void{
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

  eliminar(body:any){
      this.index = this.empleados.indexOf(body);
      console.log("index es: ", this.index);
      this.empleados.splice(this.index, 1);
      //this.rerender();
  }

  obtenerDT_Empleados(){
    this.mu.getEmpleadosPorCargo(this.resp2[this.indiceCargoEmpleado].id).subscribe(
      res => {
        this.empleados = res;
        //this.dtTrigger.next();
        //this.rerender();
        this.indiceCargoEmpleado = this.indiceCargoEmpleado + 1;        
        this.cantidadEmpleadosAgregados = 0;
      },
      err => console.log("ERROR al obtener maquinas segun su tipo")
    )
  }
    

  agregarEmpleado(empleado:any){
    console.log("agregaria empleado: ",{
      costo: empleado.costo,
      fase: this.proyecto.idFaseActual,
      empleado: empleado.id
    });
    this.mu.addEmp_Fase({  //IMPORTANTEEEEEEEEE
      costo: empleado.costo,  //
      fase: this.proyecto.idFaseActual,   //id de la fase Actual
      empleado: empleado.id  //
    }).subscribe(
      res => {
        this.eliminar(empleado);
        this.cantidadEmpleadosAgregados = this.cantidadEmpleadosAgregados + 1;
        console.log(this.cantidadEmpleadosAgregados);
        if(this.cantidadEmpleados == this.cantidadEmpleadosAgregados){
          
          if(this.indiceCargoEmpleado < this.resp2.length){
            //this.proyecto.indiceTipoMaquina = 0;
            //this.proyecto.cantidadMaquinas = this.proyecto.resp[this.proyecto.indiceTipoMaquina].cantidad;
            //this.proyecto.nombreMaquinaNecesaria = this.proyecto.resp[this.proyecto.indiceTipoMaquina].nombre;
          
            this.cantidadEmpleados = this.resp2[this.indiceCargoEmpleado].cantidad;
            this.nombreCargoNecesario = this.resp2[this.indiceCargoEmpleado].cargo;

            this.obtenerDT_Empleados();            
          }        
          else {
            //this.getCargosEmpleado();
            //this.vista = 'Empleado';
            
            //Acá en la vista que viene debería de mostrar las estimaciones de costos, tanto de las maquinarias, como la de los empleados.            
            this.common.vista = 'decide';
            this.router.navigate(['/proyecto/etapa/add']);
          }          
        }
      },
      err => console.log("Error al agregar la Fase_Maq")
    )
  }

}
