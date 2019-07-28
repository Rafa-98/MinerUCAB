import { Component, OnInit } from '@angular/core';

import { ProyectoService } from './../services/proyecto.service';
import { MuServiceService } from './../services/mu-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-etapa-edit',
  templateUrl: './etapa-edit.component.html',
  styleUrls: ['./etapa-edit.component.css']
})
export class EtapaEditComponent implements OnInit {

  nombreEtapa:string = '';

  constructor(private proyecto:ProyectoService, private mu:MuServiceService, private router:Router) { }


  ngOnInit() {
  }


  updateEtapa(){
    this.mu.updateEtapa({
      id:this.proyecto.idEtapaActual,
      nombre:this.nombreEtapa
    }).subscribe(
      res => {
        this.router.navigate(['/proyectos/list']);
      },
      err => console.log("Error al intentar actualizar el proyecto")
    )
  }

}
