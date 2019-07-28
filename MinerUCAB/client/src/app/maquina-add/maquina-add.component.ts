import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MuServiceService } from './../services/mu-service.service';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-maquina-add',
  templateUrl: './maquina-add.component.html',
  styleUrls: ['./maquina-add.component.css']
})
export class MaquinaAddComponent implements OnInit {

  caso:string = 'Agregar';
  tipo:string = 'tipo';
  edit:boolean = false;
  desactivar:boolean = null;

  maquinas:any = [{
    id:0,
    costo:0,
    tipo:'',
    nombre:''
  }]

  tiposMaquina:any = [{}];

  maquina:any = [{}];

  separacion: any;

  constructor(private activatedRouter:ActivatedRoute, private router:Router, private mu:MuServiceService, private common:CommonService) { 

    this.common.title = "Agregar / Modificar Máquina";

  }

  ngOnInit() {   
    
    this.getTipoMaquina();

  }

  getTipoMaquina(){
    this.mu.getTipoMaq().subscribe(
      res => {
        this.tiposMaquina = res;
      },
      err => console.log(err)
    )
  }

  agregarMaquina(valor:string){
    this.separacion = valor.split("-");  // se obtiene el ID del tipo de maquina (tipo_maquina) posicion 0
    console.log(this.separacion[0]);
    this.mu.saveMaquina({
      id:0,
      costo:this.maquina[0].costo,
      tipo:this.separacion[0],
      nombre:''
    }).subscribe(
      res => {
        console.log("guardado exitoso");
        this.router.navigate(['/maquinas/list']);
      },
      err => console.log(err)
    )
  }

}
