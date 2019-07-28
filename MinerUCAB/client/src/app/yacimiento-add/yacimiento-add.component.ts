import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';

@Component({
  selector: 'app-yacimiento-add',
  templateUrl: './yacimiento-add.component.html',
  styleUrls: ['./yacimiento-add.component.css']
})
export class YacimientoAddComponent implements OnInit {

  caso:string = 'Agregar';
  edit:boolean = true;
  tipos:any = ["Aloctono", "Autoctono"];

  yacimiento:any = [{
    id: 0,
    nombre: '',
    size: '',
    tipo: '',
    origen: '',
    tipo_transporte: '',
    lugar: 0
  }];

  estados:any = [{
    l_clave: 0,
    l_nombre: '',
    l_tipo: '',
    l_fk_l: ''
  }];

  municipios: any = [{
    l_clave: 0,
    l_nombre: '',
    l_tipo: '',
    l_fk_l: ''
  }];

  parroquias: any = [{
    l_clave: 0,
    l_nombre: '',
    l_tipo: '',
    l_fk_l: ''
  }];

  estado:any = [{
    id: 0,
    nombre: '',
    tipo: '',
    fk_l: ''
  }];

  municipio: any = [{
    id: 0,
    nombre: '',
    tipo: '',
    fk_l: ''
  }];

  parroquia: any = [{
    id: 0,
    nombre: '',
    tipo: '',
    fk_l: ''
  }];

  separacion: any;

  constructor(private activatedRouter:ActivatedRoute, private router:Router, private mu:MuServiceService, private common:CommonService) { 
    
    this.common.title = "Agregar / Modificar Yacimiento";

  }

  ngOnInit() {

    const params = this.activatedRouter.snapshot.params;
    if(params.id){
      this.mu.getYacimiento(params.id).subscribe(
        res => {
          console.log(res);
          this.yacimiento = res;
          this.getEstados();                    

          this.mu.getDireccion(this.yacimiento[0].lugar).subscribe(res => {
            this.estado[0].nombre = res[0].e_clave+"-"+res[0].estado; 
            this.estado[0].l_clave = res[0].e_clave;
            this.buscarMunicipios();
            this.municipio[0].nombre = res[0].m_clave+"-"+res[0].municipio;
            this.buscarParroquias();            
            this.parroquia[0].nombre = res[0].p_clave+"-"+res[0].parroquia;                       
          })        
          this.edit = true;
          this.caso = 'Modificar';  
        },
        err => console.log("entro por el error")
      )      
            
    }
    else {
      this.getEstados();
    }  

  }  

  agregarYacimiento(){ 
    this.separacion = this.parroquia[0].nombre.split("-");
    this.yacimiento[0].lugar = this.separacion[0];  // asigno el id de parroquia
    if(this.caso == 'Modificar'){
      if (this.yacimiento[0].tipo == "Aloctono"){
        this.mu.updateYacimientoAloctono(this.yacimiento[0]).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/yacimientos/list']);            
          },
          err => console.error(err)
        );
      }
      else if (this.yacimiento[0].tipo == "Autoctono"){
        this.mu.updateYacimientoAutoctono(this.yacimiento[0]).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/yacimientos/list']);
          },
          err => console.error(err)
        );
      } 
    }
    else if(this.caso == 'Agregar'){
      this.common.vista = 'AsociarYM';
      this.common.idYacimiento = this.yacimiento[0].id;
      if (this.yacimiento[0].tipo == "Aloctono"){
        this.mu.saveYacimientoAloctono(this.yacimiento[0]).subscribe(
          res => {
            console.log(res);
            //this.router.navigate(['/yacimientos/list']);
            this.router.navigate(['/minerales/list']);
          },
          err => console.error(err)
        );
      }
      else if (this.yacimiento[0].tipo == "Autoctono"){
        this.mu.saveYacimientoAutoctono(this.yacimiento[0]).subscribe(
          res => {
            console.log(res);
            //this.router.navigate(['/yacimientos/list']);
            this.router.navigate(['/minerales/list']);
          },
          err => console.error(err)
        );
      } 
    }
        
  }


  getEstados(){
    this.mu.getEstados().subscribe(
      res => {
        this.estados = res; 
        //console.log(this.estados);        
      },
      err => console.log(err)
    )
  }

  buscarMunicipios(){ 
    
      console.log("el nombre es: ", this.estado[0].nombre);
      this.separacion = this.estado[0].nombre.split("-");      
      console.log("separacion es: ",this.separacion[0]);
      for(let est of this.estados){
        if (est.l_nombre == this.estado[0].nombre){
          this.estado[0].id = est.id;
        }
      }
                
    this.mu.getMunicipios(this.separacion[0]).subscribe(
      res => {
        this.municipios = res; 
        console.log("ahora municipios: ", this.municipios);
        this.parroquias = [{
          id: 0,
          l_nombre: '',
          l_tipo: '',
          l_fk_l: ''
        }];       
      },
      err => console.log(err)
    )
  }

  buscarParroquias(){    
    this.separacion = this.municipio[0].nombre.split("-");   
    this.mu.getParroquias(this.separacion[0]).subscribe(
      res => {
        this.parroquias = res;        
      },
      err => console.log(err)
    )
  }

}
