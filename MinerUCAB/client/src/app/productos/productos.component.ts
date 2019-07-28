import { Component, OnInit } from '@angular/core';

//Importando servicios
import { MuServiceService } from './../services/mu-service.service';
import { CommonService } from './../services/common.service';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  loading:boolean = true;
  kgPresentacion:any;
  idMinPre:any;

  metales:any = [{
    id: 0,
    nombre: '',
    tipo: '',
    descripcion: '',
    conductividad: '',
    costo: ''
  }];

  noMetales:any = [{
    id: 0,
    nombre: '',
    tipo: '',
    descripcion: '',
    estado: '',
    costo: ''
  }];

  presentaciones:any = [{
    id: 0,
    tipo: '',
    cantidad: 0,
    descripcion:''
  }]

  presentacion:any;
  mineral:any;

  constructor(private mu:MuServiceService, private common:CommonService, private cart:CartService) {

    this.common.title = "Productos";         
    this.getMetales();
    this.getNoMetales();
    //this.getPresentaciones();

   }

  ngOnInit() {
  }

  getMetales(){
    this.mu.getMetales().subscribe(
      res => {
        this.metales = res;        
      },
      err => console.log(err)
    )
  }

  getNoMetales(){
    this.mu.getNoMetales().subscribe(
      res => {
        this.noMetales = res;    
        this.loading = false;   
      },
      err => console.log(err)
    )
  }

  getPresentaciones(){  // busca las presentaciones sin tomar en cuenta el Mineral
    this.mu.getPresentaciones().subscribe(
      res => {
        this.presentaciones = res;  
        console.log("Las presentaciones son: ", this.presentaciones);
      },
      err => console.log(err)
    )
  }

  buscarPre(mineral:any){
    console.log("El id que se pasa es: ",mineral.id);
    console.log("El nombre que se pasa es: ",mineral.nombre);
    console.log("todo completo: ",mineral);
    this.mineral = mineral;
    this.mu.getPresentacionesById(mineral.id).subscribe(
      res => {
        console.log(this.presentaciones);
        this.presentaciones = res; 
        console.log(this.presentaciones);
        if (this.presentaciones == "Sin resultados"){
          this.presentaciones = [{
            id: 0,
            tipo: 'No available',
            cantidad: 0,
            descripcion:''
          }];
        }
      },
      err => console.log(err)
    )
  }

  gotoMineralBuy(nombreMineral:string){

  }

  addCart(cantidad:number, mineral:any, valor:string, presentacion:any){   
    console.log("Le estoy pasando el mineral: ",mineral.nombre);
    this.presentacion = valor.split(' ');       
    this.cart.monto = this.cart.monto + (cantidad * mineral.costo * this.presentacion[2] );
    this.idMinPre = this.presentacion[0].split('-');    

    if (this.cart.indiceVenta == 0){
      this.cart.minerales[0].idMineral = this.mineral.id;      
      this.cart.minerales[0].mineral = this.mineral.nombre;
      this.cart.minerales[0].costo = cantidad * mineral.costo * this.presentacion[2];
      this.cart.minerales[0].idMinPre = this.idMinPre[0];
      this.cart.minerales[0].tipoPresentacion = this.idMinPre[1] + " de "+this.presentacion[2];
      this.cart.minerales[0].cantPresentacion = cantidad;
      console.log(this.cart.minerales);
      this.cart.indiceVenta = this.cart.indiceVenta + 1;
    }
    else {
      this.cart.minerales.push({
        idMineral: this.mineral.id,
        mineral: this.mineral.nombre,
        idPresentacion: 0,
        idMinPre: this.idMinPre[0],
        costo: cantidad * mineral.costo * this.presentacion[2],
        tipoPresentacion: this.idMinPre[1] + " de "+this.presentacion[2],
        cantPresentacion: cantidad
      })
      this.cart.indiceVenta = this.cart.indiceVenta + 1;      
      console.log(this.cart.minerales);
    }

  }

}