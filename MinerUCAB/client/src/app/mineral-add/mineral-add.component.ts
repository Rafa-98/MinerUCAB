import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MuServiceService } from './../services/mu-service.service';
import { CommonService } from './../services/common.service';


@Component({
  selector: 'app-mineral-add',
  templateUrl: './mineral-add.component.html',
  styleUrls: ['./mineral-add.component.css']
})
export class MineralAddComponent implements OnInit {  

  caso:string = 'Agregar';
  tipo:string = 'tipo';
  edit:boolean = false;
  desactivar:boolean = null;

  mineral:any = [{
    id: 0,
    nombre: '',
    tipo: '', 
    descripcion: '',
    conductividad: '',
    estado: '',    
    costo: 0
  }];

  constructor(private activatedRouter:ActivatedRoute, private router:Router, private mu:MuServiceService, private common:CommonService) { 

    this.common.title = "Agregar / Modificar Mineral";

  }


  ngOnInit() {

    const params = this.activatedRouter.snapshot.params;
    if(params.id){
      this.mu.getMineral(params.id).subscribe(
        res => {
          console.log(res);
          this.mineral = res;
          if (this.mineral[0].tipo == "Metal"){
            this.desactivar = true;
          }
          else if (this.mineral[0].tipo == "No Metal"){
            this.desactivar = false;
          }
          console.log(this.mineral);
          this.edit = true;
          this.caso = 'Modificar';          
        },
        err => console.log("entro por el error")
      )      
            
    }    

  }

  agregarMineral(){
    if (this.caso == 'Modificar'){
      if (this.mineral[0].tipo == "Metal"){
        this.mu.updateMineralMetal(this.mineral[0]).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/minerales/list']);
          },
          err => console.error(err)
        );
      }
      else if (this.mineral[0].tipo == "No Metal"){
        this.mu.updateMineralNoMetal(this.mineral[0]).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/minerales/list']);
          },
          err => console.error(err)
        );
      }
    }
    else{
      if (this.mineral[0].tipo == "Metal"){
        this.mu.saveMineralMetal(this.mineral[0]).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/minerales/list']);
          },
          err => console.error(err)
        );
      }
      else if (this.mineral[0].tipo == "No Metal"){
        this.mu.saveMineralNoMetal(this.mineral[0]).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/minerales/list']);
          },
          err => console.error(err)
        );
      } 
    }
        
  }
  
}
