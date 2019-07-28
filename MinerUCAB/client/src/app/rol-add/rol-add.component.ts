import { Component, OnInit } from '@angular/core';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rol-add',
  templateUrl: './rol-add.component.html',
  styleUrls: ['./rol-add.component.css']
})
export class RolAddComponent implements OnInit {

  caso:string = '';

  rol:any = [{
    id:0,
    nombre:''
  }]

  constructor(private common:CommonService, private mu:MuServiceService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id){
      this.mu.getRol(params.id).subscribe(
        res => {
          console.log(res);
          this.rol = res;          
          this.caso = 'Modificar';          
        },
        err => console.log("entro por el error")
      )
    }
    else{
      this.caso = 'Agregar';
    }
  }

  agregarRol(){
    if (this.caso == 'Agregar'){
      this.mu.saveRol({        
        nombre:this.rol[0].nombre
      }).subscribe(
        res => {
          this.rol = res;
          this.router.navigate(['roles/list']);
        },
        err => console.log("Error al traer rol")
      )
    }
    else {
      const params = this.activatedRouter.snapshot.params;
      this.mu.updateRol({
        id:params.id,
        nombre: this.rol[0].nombre
      }).subscribe(
        res => {
          this.rol = res;
          this.router.navigate(['roles/list']);
        },
        err => console.log("Error al traer rol")
      )
    }
  }

}
