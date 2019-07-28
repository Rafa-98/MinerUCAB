import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { CommonService } from './../services/common.service';
import { ProyectoService } from './../services/proyecto.service';
import { MuServiceService } from './../services/mu-service.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-etapa-add',
  templateUrl: './etapa-add.component.html',
  styleUrls: ['./etapa-add.component.css']
})
export class EtapaAddComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  loading:boolean = true;
  
  dtOptions: DataTables.Settings = {};

  vista:string = '';
  numeroEtapa:number = 0;
  numeroFase:number = 0;
  configuracion:string = '';
  indiceTipoMaquina:number = 0;
  indiceCargoEmpleado:number = 0;
  nombreMaquinaNecesaria:string = '';  
  cantidadMaquinas:number = 0;
  cantidadMaquinasAgregadas:number = 0;
  cantidadEmpleados:number = 0;
  cantidadEmpleadosAgregados:number = 0;
  nombreCargoNecesario:string = '';
  index:number = 0;
  duracion:number = 0;
  
  resp:any = [{
    id:0,
    nombre:'',
    cantidad:0
  }];

  resp2:any = [{
    id:0,
    cargo:'',
    cantidad:0
  }]

  etapa:string = '';
  fase:string = '';

  dia:string = '';
  mes:string = '';
  year:string = '';
  diaf:string = '';
  mesf:string = '';
  yearf:string = '';

  configuraciones:any = [{
    clave:0,
    nombre: '',
    duracion: ''
  }];

  maquinas:any = [{
    id:0,
    tipo_maquina:'',
    costo:0
  }];

  empleados:any = [{
    id:0,
    nombre:'',
    apellido:'',
    cargo:'',
    salario:0
  }]

  idEtapa:any = [{

  }];

  idFase:any = [{

  }];

  dtTrigger:Subject<any> = new Subject();

  constructor(private router:Router, private common:CommonService, private proyecto:ProyectoService, private mu:MuServiceService) { 
    console.log("La vista es: ",this.common.vista);
    this.vista = this.common.vista;
    this.common.title = 'Etapa';
    this.numeroEtapa = this.proyecto.numeroEtapa;

  }

  ngOnInit() {
    this.dtOptions = {      
      pagingType: 'full_numbers',
      pageLength: 10      
    };    

    if(this.common.vista == 'decide'){
      this.numeroEtapa = this.proyecto.numeroEtapa;
      console.log("numero de fase antes de asignar: ",this.proyecto.numeroFase);
      this.numeroFase = this.proyecto.numeroFase;
      this.configuracion = ''; // VE DE DONDE LA SACAS
      this.vista = 'decide';
    }
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
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

  getConfiguracionesDeFase(){
    this.mu.getConfiguracionesFase().subscribe(
      res => {        
        this.configuraciones = res;
      },
      err => console.log(err)
    )
  }

  cambiarAFase(){
    if(this.proyecto.numeroEtapa == 1){
      this.proyecto.etapas[0].numero = this.proyecto.numeroEtapa;
      this.proyecto.etapas[0].nombre = this.etapa;
    }
    else {
      this.proyecto.etapas.push({
        id:0,
        numero:this.proyecto.numeroEtapa,   // Numero de la Etapa
        nombre:this.etapa,  // Nombre de la Etapa
        fecha_inicio:'',
    
        fases:[{
          numero:0,   //Numero de la Fase
          nombre:'',
          fecha_inicio:'',
          fecha_fin:''
        }]
      })
    }
    console.log(this.proyecto.etapas);
    
    this.mu.saveEtapa({
      numero: this.proyecto.numeroEtapa,
      nombre: this.etapa,
      explotacion: this.proyecto.idExplotacion
    }).subscribe(
      res => {
        //this.proyecto.numeroEtapa + 1;
        this.idEtapa = res;
        this.proyecto.idEtapaActual = this.idEtapa[0].id;

        console.log("id de la etapa nueva: ",this.proyecto.idEtapaActual);

        this.numeroFase = this.proyecto.numeroFase;    
        this.getConfiguracionesDeFase();
        this.vista = 'Fase';
      },
      err => console.log("Error al crear etapa")
    )

   
    
  }

  obtenerDT_Maquinas(){
    //this.router.navigate(['/maquinasProject']);
    console.log("Buscara maquinas con el indiceTipoMaquina: ",this.indiceTipoMaquina);
    console.log("Basicamente, la resp en esa posicion es: ",this.resp[this.indiceTipoMaquina]);
    this.mu.getMaquinasPorTipo(this.resp[this.indiceTipoMaquina].id).subscribe(
      res => {
        this.maquinas = res;
        console.log("las maquinas que obtuvo: ",this.maquinas);       
        //this.dtTrigger.next();
        //this.rerender();
        this.indiceTipoMaquina = this.indiceTipoMaquina + 1;        
        this.cantidadMaquinasAgregadas = 0;
      },
      err => console.log("ERROR al obtener maquinas segun su tipo")
    )
  }

  getFaseConf(){
    this.mu.getTipoMaquinas(Number(this.configuracion.split('-')[0])).subscribe(
      res => {
        this.resp = res;
        this.proyecto.resp = res;
        console.log("respuesta: ",this.resp.res);
        //console.log("La otra forma de respuesta: ",this.resp[0].res);
        // Hacer la verificacion de que haya retornado filas y luego buscar las maquinas de ese tipo que tengamos disponibles para crear el dataTable        
        console.log("la funcion devuelve: ",Number(this.configuracion.split('-')[0]));
        if (Number(this.configuracion.split('-')[0]) == 6){
          console.log("Entro por la condicion");
          this.indiceTipoMaquina = 0;
          this.proyecto.indiceTipoMaquina = 0;
          this.proyecto.cantidadMaquinas = this.proyecto.resp[this.proyecto.indiceTipoMaquina].cantidad;
          this.proyecto.nombreMaquinaNecesaria = this.proyecto.resp[this.proyecto.indiceTipoMaquina].nombre;
          
          this.cantidadMaquinas = this.resp[this.indiceTipoMaquina].cantidad;
          this.nombreMaquinaNecesaria = this.resp[this.indiceTipoMaquina].nombre;          

          this.obtenerDT_Maquinas();                 
        }
        else {
          this.getCargosEmpleado();
        }
      },
      err => console.log("error al obtener los tipos de maquinas")
    )
  }

  AlmacenarFaseIrMaquina(){
    this.duracion = Number(this.configuracion.split(": ")[1].split(" ")[0]);
    console.log("la duracion es: ",Number(this.configuracion.split(": ")[1].split(" ")[0]));
    if(this.common.restarFechas(this.year+'-'+this.mes.split('-')[0]+'-'+this.dia, this.yearf+'-'+this.mesf.split('-')[0]+'-'+this.diaf) <= this.duracion){
    
      if(this.proyecto.numeroFase == 1){
        this.proyecto.etapas[this.proyecto.numeroEtapa-1].fases[0].nombre = this.fase;
        this.proyecto.etapas[this.proyecto.numeroEtapa-1].fases[0].fecha_inicio = this.year+'-'+this.mes.split('-')[0]+'-'+this.dia;
        this.proyecto.etapas[this.proyecto.numeroEtapa-1].fases[0].fecha_fin = this.yearf+'-'+this.mesf.split('-')[0]+'-'+this.diaf;
        this.proyecto.etapas[this.proyecto.numeroEtapa-1].fases[0].numero = this.proyecto.numeroFase;
      }
      else {
        console.log("etapas aca es: ",this.proyecto.etapas);
        this.proyecto.etapas[this.proyecto.numeroEtapa-1].fases.push({
            numero:this.numeroFase,   //Numero de la Fase
            nombre:this.fase,
            fecha_inicio:this.year+'-'+this.mes.split('-')[0]+'-'+this.dia,
            fecha_fin:this.yearf+'-'+this.mesf.split('-')[0]+'-'+this.diaf
        })
      }
      console.log(this.proyecto.etapas[this.proyecto.numeroEtapa-1]);
      console.log("VA A GUARDAR EN FASE: ",{
        numero:this.proyecto.numeroFase,
        inicio:this.proyecto.etapas[this.proyecto.numeroEtapa - 1].fases[0].fecha_inicio,
        fin:this.proyecto.etapas[this.proyecto.numeroEtapa - 1].fases[0].fecha_fin,
        etapa:this.proyecto.idEtapaActual,
        conf:this.configuracion.split("-")[0]
      })
      this.mu.saveFase({
        numero:this.proyecto.numeroFase,
        inicio:this.proyecto.etapas[this.proyecto.numeroEtapa - 1].fases[0].fecha_inicio,
        fin:this.proyecto.etapas[this.proyecto.numeroEtapa - 1].fases[0].fecha_fin,
        etapa:this.proyecto.idEtapaActual,
        conf:this.configuracion.split("-")[0]
      }).subscribe(
        res => {
          this.idFase = res;
          this.proyecto.idFaseActual = this.idFase[0].id;

          //this.proyecto.numeroFase = this.proyecto.numeroFase + 1;
          this.getFaseConf();
          this.vista = 'Maquina';

        },
        err => console.log("Error al guardar la Fase")
      )
    }
    else {
      alert("Error... La duración excede el límite de la Configuración Fase seleccionada. Máximo de días que puede durar la fase: "+this.duracion);
    }
    
  }

    eliminar(body:any){
    if (this.vista == 'Maquina'){
      this.index = this.maquinas.indexOf(body);
      this.maquinas.splice(this.index, 1);
      //this.rerender();
    }
    else {
      this.index = this.empleados.indexOf(body);
      this.empleados.splice(this.index, 1);
      //this.rerender();
    }
    
  }

  agregarMaquina(maquina:any){
    console.log("agregaria maquina: ",{
      costo: maquina.costo,
      fase: this.proyecto.idFaseActual,
      maquina: maquina.id
    });
    this.mu.addFaseMaq({
      costo: maquina.costo,  // costo de la máquina en ese momento
      fase: this.proyecto.idFaseActual,   //id de la fase Actual
      maquina: maquina.id  //id de la maquina
    }).subscribe(
      res => {
        this.eliminar(maquina);
        this.cantidadMaquinasAgregadas = this.cantidadMaquinasAgregadas + 1;
        console.log("Agrego maquina y cantidad agregada ahora es: ",this.cantidadMaquinasAgregadas);
        if(this.cantidadMaquinas == this.cantidadMaquinasAgregadas){
          console.log("longitud de resp es: ",this.resp.length);
          console.log("indiceTipo maquina ",this.indiceTipoMaquina+" < "+this.resp.length+" resp.length");
          if(this.indiceTipoMaquina < this.resp.length){
            
            this.proyecto.indiceTipoMaquina = 0;
            this.proyecto.cantidadMaquinas = this.proyecto.resp[this.proyecto.indiceTipoMaquina].cantidad;
            this.proyecto.nombreMaquinaNecesaria = this.proyecto.resp[this.proyecto.indiceTipoMaquina].nombre;
          
            this.cantidadMaquinas = this.resp[this.indiceTipoMaquina].cantidad;
            this.nombreMaquinaNecesaria = this.resp[this.indiceTipoMaquina].nombre;
            console.log("Antes de obtener maquinas. necesarias -> : ",this.cantidadMaquinas);
            this.obtenerDT_Maquinas();            
          }        
          else {
            console.log("buscara empleados ahora");
            this.getCargosEmpleado();
            //this.vista = 'Empleado';
          }          
        }
      },
      err => console.log("Error al agregar la Fase_Maq")
    )
    
    
  }

  getCargosEmpleado(){
    this.mu.getCargosEmpleados(Number(this.configuracion.split('-')[0])).subscribe(
      res => {
        this.resp2 = res;
        this.proyecto.resp2 = res;

        // Hacer la verificacion de que haya retornado filas y luego buscar las maquinas de ese tipo que tengamos disponibles para crear el dataTable        
        if (this.resp2.resp != 'Sin resultados'){  
          
          this.indiceCargoEmpleado = 0;
          
          this.cantidadEmpleados = this.resp2[this.indiceCargoEmpleado].cantidad;
          this.nombreCargoNecesario = this.resp2[this.indiceCargoEmpleado].cargo;
          

          this.proyecto.indiceCargoEmpleado = 0;
          this.proyecto.cantidadEmpleados = this.resp2[this.indiceCargoEmpleado].cantidad;
          this.proyecto.nombreCargoNecesario = this.resp2[this.indiceCargoEmpleado].cargo;

          this.obtenerDT_Empleados();


          //this.obtenerDT_Maquinas();                 
        }
        else {
          console.log("Revisa donde tu sabes ya que dijo que no hay resultados");
        }
      },
      err => console.log("error al obtener los tipos de maquinas")
    )
  }

  obtenerDT_Empleados(){
    /*this.mu.getEmpleadosPorCargo(this.resp2[this.indiceCargoEmpleado].id).subscribe(
      res => {
        this.empleados = res;
        this.proyecto.empleados = res;
        console.log("empleados ahorita: ",this.proyecto.empleados);
        //this.dtTrigger.next();
        //this.rerender();
        this.indiceCargoEmpleado = this.indiceCargoEmpleado + 1; 
        this.proyecto.indiceCargoEmpleado = this.indiceCargoEmpleado;       
        this.cantidadEmpleadosAgregados = 0;
        this.proyecto.cantidadEmpleadosAgregados = 0;
        this.router.navigate(['/empleadosp/add']);

      },
      err => console.log("ERROR al obtener maquinas segun su tipo")
    )*/
    this.router.navigate(['/empleadosp/add']);
  }

  agregarEmpleado(empleado:any){
    console.log("agregaria empleado: ",{
      costo: empleado.costo,
      fase: this.proyecto.idFaseActual,
      empleado: empleado.id
    });
    this.mu.addFaseMaq({
      costo: empleado.costo,  // costo de la máquina en ese momento
      fase: this.proyecto.idFaseActual,   //id de la fase Actual
      empleado: empleado.id  //id de la maquina
    }).subscribe(
      res => {
        this.eliminar(empleado);
        this.cantidadEmpleadosAgregados = this.cantidadEmpleadosAgregados + 1;
        console.log(this.cantidadEmpleadosAgregados);
        if(this.cantidadEmpleados == this.cantidadEmpleadosAgregados){
          
          if(this.indiceCargoEmpleado < this.resp.length){
            //this.proyecto.indiceTipoMaquina = 0;
            //this.proyecto.cantidadMaquinas = this.proyecto.resp[this.proyecto.indiceTipoMaquina].cantidad;
            //this.proyecto.nombreMaquinaNecesaria = this.proyecto.resp[this.proyecto.indiceTipoMaquina].nombre;
          
            this.cantidadEmpleados = this.resp[this.indiceCargoEmpleado].cantidad;
            this.nombreCargoNecesario = this.resp[this.indiceCargoEmpleado].nombre;

            this.obtenerDT_Empleados();            
          }        
          else {
            //this.getCargosEmpleado();
            //this.vista = 'Empleado';
            
            //Acá en la vista que viene debería de mostrar las estimaciones de costos, tanto de las maquinarias, como la de los empleados.
            this.vista = 'decide';
          }          
        }
      },
      err => console.log("Error al agregar la Fase_Maq")
    )
  }

  NuevaFase(){
    this.numeroFase = this.numeroFase + 1;
    this.getConfiguracionesDeFase();
    this.vista = 'Fase';
  }

  NuevaEtapa(){
    this.numeroEtapa = this.numeroEtapa + 1;
    this.vista = 'Proyecto';
  }

  Terminar(){
    this.proyecto.resetAll();
    this.router.navigate(['/inicio']);
  }

}

