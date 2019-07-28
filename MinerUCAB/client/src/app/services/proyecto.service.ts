import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  ordenVenta:boolean = false;

  numeroEtapa:number = 1;
  numeroFase:number = 1;
  idYacimientoExplotar:number = 0;
  idYacMinExplotar:number = 0;
  idExplotacion:number = 0;
  idEtapaActual:number = 0;
  idFaseActual:number = 0;
  indiceTipoMaquina:number = 0;
  nombreMaquinaNecesaria:string = '';
  cantidadMaquinas:number = 0;
  cantidadMaquinasAgregadas:number = 0;

  indiceCargoEmpleado:number = 0;
  cantidadEmpleados:number = 0;
  nombreCargoNecesario:string='';
  cantidadEmpleadosAgregados:number = 0;


  etapas:any = [{
    id:0,
    numero:0,   // Numero de la Etapa
    nombre:'',  // Nombre de la Etapa
    fecha_inicio:'',
    
    fases:[{
      numero:0,   //Numero de la Fase
      nombre:'',
      fecha_inicio:'',
      fecha_fin:''
    }]

  }];

  resp:any = [{
    id:0,
    nombre:'',
    cantidad:0
  }]

  resp2:any = [{
    id:0,
    cargo:'',
    cantidad:0
  }]

  maquinas:any = [{
    id:0,
    tipo_maquina:''
  }]

  empleados:any = [{
    id:0,
    nombre:'',
    apellido:'',
    cargo:'',
    salario:0
  }]

  /*fases:any = [{

  }];*/

  constructor() { }

  resetAll(){
    this.numeroEtapa = 1;
    this.numeroFase = 1;
    this.idYacimientoExplotar = 0;
    this.idYacMinExplotar = 0;
    this.idExplotacion = 0;
    this.idEtapaActual = 0;
    this.idFaseActual = 0;
    this.indiceTipoMaquina = 0;
    this.nombreMaquinaNecesaria = '';
    this.cantidadMaquinas = 0;
    this.cantidadMaquinasAgregadas = 0;

    this.indiceCargoEmpleado = 0;
    this.cantidadEmpleados = 0;
    this.nombreCargoNecesario ='';
    this.cantidadEmpleadosAgregados = 0;

    this.etapas = [{
      id:0,
      numero:0,   // Numero de la Etapa
      nombre:'',  // Nombre de la Etapa
      fecha_inicio:'',
      
      fases:[{
        numero:0,   //Numero de la Fase
        nombre:'',
        fecha_inicio:'',
        fecha_fin:''
      }]
  
    }];
  
    this.resp = [{
      id:0,
      nombre:'',
      cantidad:0
    }]
  
    this.maquinas = [{
      id:0,
      tipo_maquina:''
    }]

    this.empleados = [{
      id:0,
      nombre:'',
      apellido:'',
      cargo:'',
      salario:0
    }]

    this.resp2 = [{
      id:0,
      cargo:'',
      cantidad:0
    }]

  }

}
