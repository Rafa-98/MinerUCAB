import { Component, OnInit } from '@angular/core';

import { ProyectoService } from './../services/proyecto.service';
import { MuServiceService } from './../services/mu-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-explotacion-edit',
  templateUrl: './explotacion-edit.component.html',
  styleUrls: ['./explotacion-edit.component.css']
})
export class ExplotacionEditComponent implements OnInit {

  cantCarbon:number = 0;

  constructor(private proyecto:ProyectoService, private mu:MuServiceService, private router:Router) { }

  ngOnInit() {
    
  }

  updateProyecto(){
    this.mu.updateProyecto({
      id:this.proyecto.idExplotacion,
      cantidad:this.cantCarbon
    }).subscribe(
      res => {
        this.router.navigate(['/proyectos/list']);
      },
      err => console.log("Error al intentar actualizar el proyecto")
    )
  }

}
