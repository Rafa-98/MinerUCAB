import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { MuServiceService } from './../services/mu-service.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-usuario-data-table',
  templateUrl: './usuario-data-table.component.html',
  styleUrls: ['./usuario-data-table.component.css']
})
export class UsuarioDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  loading:boolean = true;

  usuarios:any = [{
    id: 0,
    login: '',
    password: '',
    nombre: '',
    apellido: '',    
    rol: ''
  }];

  dtTrigger:Subject<any> = new Subject();

  index:number = 0;

  constructor(private muService:MuServiceService, private common:CommonService, private router:Router) { }

  ngOnInit() {

    this.common.title = "Usuarios";
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getUsuarios();

  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  getUsuarios(){
    this.muService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  gotoAgregarUsuario(){
    this.router.navigate(['/usuarios/add']);
  }

  deleteUser(usuario:any){

  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  eliminar(usuario:any){
    this.index = this.usuarios.indexOf(usuario);
    console.log("index es: ", this.index);
    this.usuarios.splice(this.index, 1);
    this.rerender();
  }

  eliminarUsuario(usuario:any){
    this.muService.deleteUsuario(usuario.id).subscribe(
      res => {        
        console.log("Borrado exitoso");
        this.eliminar(usuario);
      },
      err => console.log(err)
    )
  }

}
