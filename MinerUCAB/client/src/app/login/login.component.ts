import { Component, OnInit } from '@angular/core';

// Importando al gestor de vistas
import { Router } from '@angular/router';
import { delay } from 'q';

// Importando servicios
import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { PrivilegiosService } from './../services/privilegios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  loading:boolean = false;  
  //usuario:String = 'rafael';
  //password:String = 'ing-informatica';
  usuarioI:String = '';
  passwordI:String = '';
  error:boolean = false;

  usuario:any = {
    login:'',
    password:''
  }
  
  respuesta:any = [{
    login:'',
    password:'',
    empleado:0,
    rol:0
  }];

  constructor(private router:Router, private common:CommonService, private mu:MuServiceService, private privilegios:PrivilegiosService) { }

  ngOnInit() {    
  }

  exLogin(){
    this.loading = true; 
    this.error = false;
    this.mu.login(this.usuario).subscribe(
      res => {
        this.respuesta = res;
        if (this.respuesta.login == 'Usuario y/o contraseña incorrecto' ){          
          this.error = true;
          this.loading = false;          
          this.usuario.login = '';
          this.usuario.password = '';
        }
        else {
          this.loading = false;          
          this.common.loggedIn = true;
          this.privilegios.evaluar(this.respuesta[0].rol);
          this.privilegios.idRolActual = this.respuesta[0].rol;
          this.router.navigate(['/inicio']);
        }        
        
        this.loading = false;
      },
      err => console.log(err)
    )

    /*if (this.usuarioI === this.usuario && this.passwordI === this.password) {
      alert("Login successful");
      this.common.loggedIn = true;      
      this.router.navigate(['/inicio']);
    }
    else {
      alert("Error, usuario o contrañela inválido.");
      this.usuarioI = '';
      this.passwordI = '';
      this.loading = false;
    }*/
  }

}