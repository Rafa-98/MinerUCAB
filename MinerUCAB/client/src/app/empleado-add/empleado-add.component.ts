import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MuServiceService } from './../services/mu-service.service';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-empleado-add',
  templateUrl: './empleado-add.component.html',
  styleUrls: ['./empleado-add.component.css']
})
export class EmpleadoAddComponent implements OnInit {

  caso:string = 'Agregar';
  tipo:string = 'tipo';
  edit:boolean = false;
  desactivar:boolean = null;

  empleado:any = [{
    id:0,
    nombre:'',
    apellido:'',
    salario:'',
    cargo:'',
    lugar:'' 
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

  cargos:any = [{
    id: 0,
    nombre: '',
    descripcion:''
  }]

  cargo:any = [{
    id: 0,
    nombre: '',
    descripcion:''
  }]

  separacion: any;


  constructor(private activatedRouter:ActivatedRoute, private router:Router, private mu:MuServiceService, private common:CommonService) { 

    this.common.title = "Agregar / Modificar Empleado";

  }


  ngOnInit() {

    const params = this.activatedRouter.snapshot.params;
    if(params.id){
      this.mu.getEmpleado(params.id).subscribe(
        res => {          
          this.empleado = res;                   
          this.edit = true;
          this.caso = 'Modificar'; 
          this.getEstados();
          console.log(this.empleado[0].lugar);
          this.mu.getDireccion(this.empleado[0].lugar).subscribe(res => {
            this.estado[0].nombre = res[0].e_clave+"-"+res[0].estado; 
            this.estado[0].l_clave = res[0].e_clave;
            this.buscarMunicipios();
            this.municipio[0].nombre = res[0].m_clave+"-"+res[0].municipio;
            this.buscarParroquias();            
            this.parroquia[0].nombre = res[0].p_clave+"-"+res[0].parroquia;                        
          }) 
        },
        err => console.log("entro por el error")
      )      
            
    }
    else {
      this.getEstados();
    } 
    this.getCargos();
  }

  getCargos(){
    this.mu.getCargos().subscribe(
      res => {
        this.cargos = res;        
      },
      err => console.error(err)
    );
  }

  agregarEmpleado(){
    this.separacion = this.cargo[0].nombre.split("-");
    this.empleado[0].cargo = this.separacion[0];
    this.separacion = this.parroquia[0].nombre.split("-");
    this.empleado[0].lugar = this.separacion[0];  // asigno el id de parroquia
    if (this.caso == 'Modificar'){      
        this.mu.updateEmpleado(this.empleado[0]).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/empleados/list']);
          },
          err => console.error(err)
        );            
    }
    else{    
        console.log(this.empleado[0]);
        this.mu.saveEmpleado(this.empleado[0]).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/empleados/list']);
          },
          err => console.error(err)
        );          
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
