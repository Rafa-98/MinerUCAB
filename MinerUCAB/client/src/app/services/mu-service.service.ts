import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Mineral } from './../models/mineral';
import { Yacimiento } from './../models/yacimiento';
import { Usuario } from './../models/usuario';
import { Empleado } from './../models/empleado';
import { MinPre } from './../models/minPre';
import { YacMin } from './../models/yacmin';
import { EmpTurno } from './../models/empTurno';
import { UsuarioLogin } from './../models/usuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class MuServiceService {

  api_url = 'http://localhost:3000/api';
  reportes_url = 'http://localhost:3000/api/reporte';

  constructor(private http: HttpClient) { }

  login(usuarioLogin: UsuarioLogin){
    return this.http.post(this.api_url+'/usuario/ingreso', usuarioLogin);
  }

  obtenerCantidades(id:number){
    return this.http.get(this.api_url+'/movimiento/cantidades/'+id);
  }

  checkMinPre(minPre: MinPre){    
    return this.http.post(this.api_url+'/minpre/mp', minPre);
  }

  cambiarEstatusOC(id:number){
    return this.http.post(this.api_url+'/ordencompra/recibir/'+id, {}); // Solo quiero el ID como parámetro
  }

  cambiarEstatusOV(id:number){
    return this.http.put(this.api_url+'/ordenventa/despachar/'+id, {});
  }

  cambiarEstatusMovimiento(id){
    return this.http.put(this.api_url+'/movimiento/ordencompra/'+id, {}); // Solo quiero el ID como parámetro
  }

  cambiarEstatusMovimientoOV(id){
    return this.http.put(this.api_url+'/movimiento/ordenventa/'+id, {});
  }
  
  actualizarAlmacen(body:any) {
    return this.http.put(this.api_url+'/minalm/aumentar', body);
  }

  disminuirAlmacen(body:any){
    return this.http.put(this.api_url+'/minalm/disminuir', body);
  }

  createMinComposicion(body:any){
    return this.http.post(this.api_url+'/relmin', body);
  }
  
  getMetales(){
    return this.http.get(this.api_url+'/mineral/metal');
  }

  getNoMetales(){
    return this.http.get(this.api_url+'/mineral/nometal');
  }

  getMinerales(){
    return this.http.get(this.api_url+'/mineral');
  }

  getAliMinerales(aliado:number){
    return this.http.get(this.api_url+'/alimin/'+aliado);
  }

  getMineral(id:number){
    return this.http.get(this.api_url+'/mineral/'+id);
  }

  getEmpleados(){
    return this.http.get(this.api_url+'/empleado');
  }

  getUsuarios(){
    return this.http.get(this.api_url+'/usuario');
  }

  getYacimientos(){
    return this.http.get(this.api_url+'/yacimiento');
  }

  getYacimiento(id:number){
    return this.http.get(this.api_url+'/yacimiento/'+id);
  }

  getEstados(){
    return this.http.get(this.api_url+'/lugar/estado');
  }

  getMunicipios(id:number){
    return this.http.get(this.api_url+'/lugar/municipio/'+id);
  }

  getParroquias(id:number){
    return this.http.get(this.api_url+'/lugar/parroquia/'+id);
  }

  getDireccion(id:number){
    return this.http.get(this.api_url+'/lugar/direccion/'+id);
  }

  getUsuario(id:number){
    return this.http.get(this.api_url+'/usuario/'+id);
  }

  getRol(id:number){
    return this.http.get(this.api_url+'/rol/'+id);
  }

  getRoles(){
    return this.http.get(this.api_url+'/rol');
  }

  getPrivilegios(){
    return this.http.get(this.api_url+'/privilegio');
  }

  getEmpleado(id:number){
    return this.http.get(this.api_url+'/empleado/'+id);
  }
  
  getClientes(){
    return this.http.get(this.api_url+'/cliente');
  }

  getCliente(id:number){
    return this.http.get(this.api_url+'/cliente/'+id);
  }

  getPresentaciones(){
    return this.http.get(this.api_url+'/presentacion/');    
  }

  getPresentacionesById(id:number){
    return this.http.get(this.api_url+'/minpre/mineral/'+id);    
  }

  getTurnos(){
    return this.http.get(this.api_url+'/turno');    
  }

  getAliados(){
    return this.http.get(this.api_url+'/aliado');
  }

  getAliadoMinerales(id:number){
    return this.http.get(this.api_url+"/aliado/"+id);
  }

  getMinAlmByPedido(id:number){
    return this.http.get(this.api_url+'/pedido/minalm/'+id);
  }

  getMinAlmByMinId(id:number){
    return this.http.get(this.api_url+'/minalm/'+id);
  }

  getmaquinas(){
    return this.http.get(this.api_url+'/maquina');
  }

  getTipoMaq(){
    return this.http.get(this.api_url+'/tipomaquina');
  }

  getOrdenComprasPendientes(){
    return this.http.get(this.api_url+'/ordencompra/recibir');
  }

  getOrdenVentasPendientes(){
    return this.http.get(this.api_url+'/ordenventa/espera');
  }

  getOrdenComprasRecibidas(){
    return this.http.get(this.api_url+'/ordencompra/recibida');
  }

  getOrdenVentasRecibidas(){
    return this.http.get(this.api_url+'/ordenventa/efectuadas');
  }

  getPedidosOC(id:number){
    return this.http.get(this.api_url+'/pedido/ordencompra/'+id);
  }

  getPedidosOV(id:number){
    return this.http.get(this.api_url+'/factmin/ordenventa/'+id);
  }

  getCargos(){
    return this.http.get(this.api_url+'/cargo');
  }

  getConfiguracionesFase(){
    return this.http.get(this.api_url+'/faseconf');
  }

  getTipoMaquinas(id:number){
    console.log("id es: ",id);
    return this.http.get(this.api_url+'/maqconf/tipomaquinas/'+id);
  }

  getMaquinasPorTipo(id:number){
    return this.http.get(this.api_url+'/maquina/maqtipo/'+id);
  }
  
  getYacmin(id:number){
    return this.http.get(this.api_url+'/yacmin/yacimiento/'+id);
  }

  getYacimientosYM(){
    return this.http.get(this.api_url+'/yacmin/sinexplotar');
  }

  getCargosEmpleados(id:number){
    return this.http.get(this.api_url+'/confcar/fase/'+id); 
  }

  getEmpleadosPorCargo(id:number){
    return this.http.get(this.api_url+'/empleado/empcar/'+id);
  }

  getrolPri(id:number){
    return this.http.get(this.api_url+'/privilegio/rolpri/'+id);
  }

  saveRolPri(body:any){
    return this.http.post(this.api_url+'/rolpri',body);
  }

  getPrivilegiosNoRol(id:number){
    return this.http.get(this.api_url+'/privilegio/rolpri/no/'+id);
  }
  
  getPTer(){
    return this.http.get(this.api_url+'/explotacion/terminado');
  }

  getPEje(){
    return this.http.get(this.api_url+'/explotacion/proceso');
  }

  getPIni(){
    return this.http.get(this.api_url+'/explotacion/conf');
  }

  getETer(id:number){
    return this.http.get(this.api_url+'/etapa/terminado/'+id);
  }

  getEEje(id:number){
    return this.http.get(this.api_url+'/etapa/proceso/'+id);
  }

  getEIni(id:number){
    return this.http.get(this.api_url+'/etapa/conf/'+id);
  }

  getFTer(id:number){
    return this.http.get(this.api_url+'/fase/etapa/terminado/'+id);
  }

  getFEje(id:number){
    return this.http.get(this.api_url+'/fase/etapa/proceso/'+id);
  }

  getFIni(id:number){
    return this.http.get(this.api_url+'/fase/etapa/conf/'+id);
  }

  saveMaquina(maquina:any){
    return this.http.post(this.api_url+'/maquina', maquina);
  }

  saveMineralMetal(mineral: Mineral){
    return this.http.post(this.api_url+'/mineral/metal', mineral);
  }

  saveMineralNoMetal(mineral: Mineral){
    return this.http.post(this.api_url+'/mineral/nometal', mineral);
  }

  saveYacimientoAloctono(yacimiento: Yacimiento){
    return this.http.post(this.api_url+'/yacimiento/aloctono', yacimiento);
  }

  saveYacimientoAutoctono(yacimiento: Yacimiento){
    return this.http.post(this.api_url+'/yacimiento/autoctono', yacimiento);
  }

  saveUsuario(usuario: Usuario){
    return this.http.post(this.api_url+'/usuario', usuario);
  }

  saveEmpleado(empleado: Empleado){
    return this.http.post(this.api_url+'/empleado', empleado);
  }

  saveMinPre(minPre: MinPre){
    return this.http.post(this.api_url+'/minpre', minPre);
  }

  saveYacMin(yacMin: YacMin){
    return this.http.post(this.api_url+'/yacmin', yacMin);
  }

  saveEmpTurno(empTurno: EmpTurno){

  }

  saveOrdenCompra(orden:any){
    return this.http.post(this.api_url+'/ordencompra', orden);
  }

  saveOrdenventa(orden:any){
    return this.http.post(this.api_url+'/ordenventa', orden);
  }

  saveTransferencia(transferencia:any){
    return this.http.post(this.api_url+'/tipopago/transferencia', transferencia);
  }

  saveTC(TC:any){
    return this.http.post(this.api_url+'/tipopago/tarcre', TC);
  }

  saveTD(TD:any){
    return this.http.post(this.api_url+'/tipopago/tardeb', TD);
  }

  saveCheque(cheque:any){
    return this.http.post(this.api_url+'/tipopago/cheque', cheque);
  }

  savePago(pago:any){
    return this.http.post(this.api_url+'/pago', pago);
  }

  saveFactMineral(factMin:any){
    return this.http.post(this.api_url+'/factmin', factMin);
  }

  savePedido(pedido:any){
    return this.http.post(this.api_url+'/pedido', pedido);
  }

  saveCliente(cliente:any){
    return this.http.post(this.api_url+'/cliente', cliente);
  }

  saveMovimiento(movimiento:any){
    return this.http.post(this.api_url+'/movimiento/ordencompra', movimiento);
  }
  
  saveMovimientoVenta(movimiento:any){
    return this.http.post(this.api_url+'/movimiento/ordenventa', movimiento);
  }

  saveExplotacion(explotacion:any){
    return this.http.post(this.api_url+'/explotacion', explotacion);
  }

  saveEtapa(etapa:any){
    return this.http.post(this.api_url+'/etapa', etapa);
  }

  saveFase(fase:any){
    return this.http.post(this.api_url+'/fase', fase);
  }

  saveRol(rol:any){
    return this.http.post(this.api_url+'/rol', rol);
  }

  addFaseMaq(faseMaq:any){
    return this.http.post(this.api_url+'/fasemaq', faseMaq);
  }

  addEmp_Fase(body:any){
    return this.http.post(this.api_url+'/empfase', body);
  }

  updateMineralMetal(mineral: Mineral){
    return this.http.put(this.api_url+'/mineral/metal/'+mineral.id, mineral);
  }

  updateMineralNoMetal(mineral: Mineral){
    return this.http.put(this.api_url+'/mineral/nometal/'+mineral.id, mineral);
  }

  updateYacimientoAloctono(yacimiento: Yacimiento){
    return this.http.put(this.api_url+'/yacimiento/aloctono/'+yacimiento.id, yacimiento);
  }

  updateYacimientoAutoctono(yacimiento: Yacimiento){
    return this.http.put(this.api_url+'/yacimiento/autoctono/'+yacimiento.id, yacimiento);
  }

  updateUsuario(usuario: Usuario){
    return this.http.put(this.api_url+'/usuario/'+usuario.id, usuario);

  }

  updateEmpleado(empleado: Empleado){
    return this.http.put(this.api_url+'/empleado/'+empleado.id, empleado);
  }

  updateCliente(cliente: any){
    return this.http.put(this.api_url+'/cliente/'+cliente.id, cliente);
  }

  updateProyecto(body:any){
    return this.http.put(this.api_url+'/explotacion/'+body.id, body);
  }

  updateRol(rol:any){
    return this.http.put(this.api_url+'/rol/'+rol.id, rol);
  }

  updateEtapa(body:any){
    return this.http.put(this.api_url+'etapa/'+body.id, body);
  }

  deleteMineral(id: number){
    return this.http.delete(this.api_url+'/mineral/'+id);
  }

  deleteYacimiento(id: number) {
    return this.http.delete(this.api_url+'/yacimiento/'+id);
  }

  deleteEmpleado(id: number) {
    return this.http.delete(this.api_url+'/empleado/'+id);
  }

  deleteUsuario(id:number) {
    return this.http.delete(this.api_url+'/usuario/'+id);
  }

  deleteCliente(id:number) {
    return this.http.delete(this.api_url+'/cliente/'+id);
  }

  deleteRol(id:number){
    return this.http.delete(this.api_url+'/rol/'+id);
  }

  deletePrivilegio(body:any){
    return this.http.delete(this.api_url+'/rolpri/'+body.privilegio+"/"+body.rol);
  }

  deleteProyecto(id:number){
    return this.http.delete(this.api_url+'/explotacion/'+id);
  }

  deleteEtapa(id:number){
    return this.http.delete(this.api_url+'/etapa/'+id);
  }

  deleteFase(id:number) {
    return this.http.delete(this.api_url+'/fase/'+id);
  }

  iniciarFase(id:number){
    return this.http.put(this.api_url+'/fase/iniciar/'+id, {});
  }

  terminarFase(id:number){
    return this.http.put(this.api_url+'/fase/finalizar/'+id, {});
  }

  iniciarEtapa(id:number){
    return this.http.put(this.api_url+'/etapa/iniciar/'+id, {});
  }

  terminarEtapa(id:number){
    return this.http.put(this.api_url+'/etapa/finalizar/'+id, {});
  }

  iniciarProyecto(id:number){
    return this.http.put(this.api_url+'/explotacion/iniciar/'+id, {});
  }

  terminarProyecto(id:number){
    return this.http.put(this.api_url+'/explotacion/finalizar/'+id, {});
  }

  // --------------------------- REPORTES ---------------------------

  doReporte1(){
    return this.http.get(this.reportes_url+'/1');
  }

  doReporte2(body:any){
    return this.http.post(this.reportes_url+'/2', body);
  }

  doReporte3(){
    return this.http.post(this.reportes_url+'/3', {});
  }

  doReporte4(){
    return this.http.get(this.reportes_url+'/4');
  }

  doReporte5(){
    return this.http.post(this.reportes_url+'/5', {});
  }

  doReporte6(){
    return this.http.post(this.reportes_url+'/6', {});
  }

  doReporte7(){
    return this.http.post(this.reportes_url+'/7', {});
  }

  doReporte8(){
    return this.http.post(this.reportes_url+'/8', {});
  }

  doReporte9(){
    return this.http.post(this.reportes_url+'/9', {});
  }

  doReporte10(){
    return this.http.post(this.reportes_url+'/10', {});
  }  

}
