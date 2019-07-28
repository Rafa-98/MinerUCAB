import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  title:string = '';
  loggedIn:boolean = false;
  crudVista:string = '';
  vista:string= '';
  idYacimiento:string = '';
  idAliado:number = 0;
  rolId:number = 0;
  rolNombre:string = '';
  idProyecto:number = 0;
  idEtapaActual:number = 0;

  constructor() { }

  
  addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  FechaHoy(){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();    
    dd = this.addZero(dd);
    mm = this.addZero(mm);
    return yyyy+'-'+mm+'-'+dd;
  }

  restarFechas(fechai, fechaf){ //Fecha 2 es mayor que fecha 1
    var fecha1 = new Date();
    var fecha2 = new Date();
    //var diasDif = fecha1 - fech2i;
    //return Math.round(diasDif/(1000*60*60*24));

    /*var eventStartTime = new Date(fechai);
      var eventEndTime = new Date(fechaf);
      var duration = eventEndTime.valueOf() - eventStartTime.valueOf();
      return duration;*/

    var fechaInicio = new Date(fechai).getTime();
    var fechaFin = new Date(fechaf).getTime();
    console.log(fechaFin);
    var diff = fechaFin - fechaInicio;

    return Math.round(diff/(1000*60*60*24)); 
    
    /*var fecha1 = new Date('2007-07-10');
    var fecha2 = new Date('2008-08-11');
    var diasDif = fecha2 - fecha1;
    var dias = Math.round(diasDif/(1000 * 60 * 60 * 24));
    console.log("dias de diferencia: " + dias);*/
  }

}
