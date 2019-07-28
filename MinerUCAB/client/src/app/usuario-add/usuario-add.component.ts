import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  caso:string = 'Agregar';
  edit:boolean = true;
  tipos:any = [];
  idRol:any;

  usuario:any = [{
    id: 0,
    login: '',
    password: '',
    empleado: '',
    apellido: '',
    rol: '',    
  }];

  roles:any = [{
    id: 0,
    nombre: ''
  }];

  constructor(private activatedRouter:ActivatedRoute, private router:Router, private mu:MuServiceService, private common:CommonService) {
    this.common.title = "Agregar / Modificar Usuario";
   }

  ngOnInit() {

    this.getRoles();
    const params = this.activatedRouter.snapshot.params;
    if(params.id){
      this.mu.getUsuario(params.id).subscribe(
        res => {     
          this.getRoles()     ;
          console.log(res);
          this.usuario = res;
          console.log("rol: ",this.usuario[0].rol);
          
          this.edit = true;
          this.caso = 'Modificar';        
        },
        err => console.log("entro por el error")
      )      
            
    }

  }

  getRoles(){
    this.mu.getRoles().subscribe(
      res => {
        this.roles = res;
      },
      err => console.error(err)
    );
  }

  agregarUsuario(){
    this.idRol = this.usuario[0].rol.split('-');
    this.usuario[0].rol = this.idRol[0];
    console.log("el usuario",this.usuario[0]);
    if (this.caso == 'Modificar'){           
      this.mu.updateUsuario(this.usuario[0]).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios/list']);
        },
        err => console.error(err)
      );      
    }
    else if (this.caso == 'Agregar'){
      this.mu.saveUsuario(this.usuario[0]).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios/list']);
        },
        err => console.error(err)
      );
    }
  }  

}
