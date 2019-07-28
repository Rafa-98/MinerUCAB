import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MuServiceService } from './../services/mu-service.service';
import { CommonService } from './../services/common.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {

  caso:string = 'Agregar';
  tipo:string = 'tipo';
  edit:boolean = false;
  desactivar:boolean = null;

  cliente:any = [{
    id: 0,
    nombre: '',
    apellido: '',
    telefono: '',
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

    this.common.title = "Agregar Cliente";

  }

  ngOnInit() {

    const params = this.activatedRouter.snapshot.params;
    if(params.id){
      this.caso = 'Modificar';
      this.mu.getCliente(params.id).subscribe(
        res => {
          this.cliente = res;
          console.log("El cliente es: ",this.cliente);
          this.getEstados();
          console.log(this.cliente[0].lugar);
          this.mu.getDireccion(this.cliente[0].lugar).subscribe(res => {
            this.estado[0].nombre = res[0].e_clave+"-"+res[0].estado; 
            this.estado[0].l_clave = res[0].e_clave;
            this.buscarMunicipios();
            this.municipio[0].nombre = res[0].m_clave+"-"+res[0].municipio;
            this.buscarParroquias();            
            this.parroquia[0].nombre = res[0].p_clave+"-"+res[0].parroquia;                        
          })
        },
        err => console.log(err)
      )
    }

    this.getEstados();

  }

  agregarEmpleado(){
    this.separacion = this.parroquia[0].nombre.split("-");
    this.cliente[0].lugar = this.separacion[0];  // asigno el id de parroquia        
    this.mu.saveEmpleado(this.cliente[0]).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/clientes/list']);
      },
      err => console.error(err)
    );          
    
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

  agregarCliente(){
    this.separacion = this.parroquia[0].nombre.split('-');    
    this.mu.saveCliente({
      id: 0,
      nombre: this.cliente[0].nombre,
      apellido: this.cliente[0].apellido,
      telefono: this.cliente[0].telefono,
      lugar: this.separacion[0]
    }).subscribe(
      res => {
        this.router.navigate(['/clientes/list']);
      },
      err => console.log(err)
    )
  }

  modificarCliente(){
    this.separacion = this.parroquia[0].nombre.split('-');
    const params = this.activatedRouter.snapshot.params;
    this.mu.updateCliente({
      id: params.id,
      nombre: this.cliente[0].nombre,
      apellido: this.cliente[0].apellido,
      telefono: this.cliente[0].telefono,
      lugar: this.separacion[0]
    }).subscribe(
      res => {
        this.router.navigate(['/clientes/list']);
      },
      err => console.log(err)
    )
  }

}
