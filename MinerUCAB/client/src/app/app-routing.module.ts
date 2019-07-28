import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importando las distintas vistas:
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { AddModEmpleadoComponent } from './add-mod-empleado/add-mod-empleado.component';
import { AddModUsuarioComponent } from './add-mod-usuario/add-mod-usuario.component';
import { CompraAliadoComponent } from './compra-aliado/compra-aliado.component'
import { CrearYacimientoComponent } from './crear-yacimiento/crear-yacimiento.component';
import { MenuReportesComponent } from './menu-reportes/menu-reportes.component';
import { ProductosComponent } from './productos/productos.component';
import { MineralesComponent } from './minerales/minerales.component';
import { MineralAddComponent } from './mineral-add/mineral-add.component';
import { MineralesDataTableComponent } from './minerales-data-table/minerales-data-table.component';
import { CrudComponent } from './crud/crud.component';
import { EmpleadoDataTableComponent } from './empleado-data-table/empleado-data-table.component';
import { UsuarioDataTableComponent } from './usuario-data-table/usuario-data-table.component'
import { YacimientoDataTableComponent } from './yacimiento-data-table/yacimiento-data-table.component';
import { YacimientoAddComponent } from './yacimiento-add/yacimiento-add.component';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';
import { EmpleadoAddComponent } from './empleado-add/empleado-add.component';
import { TurnosDataTableComponent } from './turnos-data-table/turnos-data-table.component';
import { AliadosDataTableComponent } from './aliados-data-table/aliados-data-table.component';
import { FacturaCompraComponent } from './factura-compra/factura-compra.component';
import { MineralPruebaComponent } from './mineral-prueba/mineral-prueba.component';
import { MineralCompraComponent } from './mineral-compra/mineral-compra.component';
import { MaquinaDataTableComponent } from './maquina-data-table/maquina-data-table.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ClienteRegistroComponent } from './cliente-registro/cliente-registro.component';
import { ClienteDataTableComponent } from './cliente-data-table/cliente-data-table.component';
import { MaquinaAddComponent } from './maquina-add/maquina-add.component';
import { FacturasComponent } from './facturas/facturas.component';
import { FacturaPendienteComponent } from './factura-pendiente/factura-pendiente.component';
import { FacturaProcesadaComponent } from './factura-procesada/factura-procesada.component';
import { PagoComponent } from './pago/pago.component';
import { EtapaAddComponent } from './etapa-add/etapa-add.component';
import { MaquinaProjectDTComponent } from './maquina-project-dt/maquina-project-dt.component';
import { EmpleadoProjectDTComponent } from './empleado-project-dt/empleado-project-dt.component';
import { RolesDataTableComponent } from './roles-data-table/roles-data-table.component';
import { PrivilegioDataTableComponent } from './privilegio-data-table/privilegio-data-table.component';
import { RolAddComponent } from './rol-add/rol-add.component';
import { ProyectoDataTatbleComponent } from './proyecto-data-tatble/proyecto-data-tatble.component';
import { EtapaDataTableComponent } from './etapa-data-table/etapa-data-table.component';
import { FaseDataTableComponent } from './fase-data-table/fase-data-table.component';
import { ExplotacionEditComponent } from './explotacion-edit/explotacion-edit.component';
import { EtapaEditComponent } from './etapa-edit/etapa-edit.component';
import { DataTablesComponent } from './data-tables/data-tables.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  /*{
    path: 'empleado/add',
    component: AddModEmpleadoComponent
  },*/
  /*{
    path: 'usuario/add',
    component: AddModUsuarioComponent
  },*/
  {
    path: 'aliado/buy',
    component: CompraAliadoComponent
  },
  /*{
    path: 'yacimiento/create',
    component: CrearYacimientoComponent 
  },*/
  {
    path: 'reportes',
    component: MenuReportesComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: 'minerales',
    component: MineralesComponent 
  },
  {
    path: 'minerales/add',
    component: MineralAddComponent
  },
  {
    path: 'minerales/edit/:id',
    component: MineralAddComponent
  },
  {
    path: 'minerales/list',
    component: MineralesDataTableComponent
  }, 
  {
    path: 'empleados/add',
    component: EmpleadoAddComponent
  },
  {
    path: 'empleados/edit/:id',
    component: EmpleadoAddComponent
  },
  {
    path: 'empleados/list',
    component: EmpleadoDataTableComponent
  }, 
  {
    path: 'usuarios/add',
    component: UsuarioAddComponent
  },
  {
    path: 'usuarios/edit/:id',
    component: UsuarioAddComponent
  },
  {
    path: 'usuarios/list',
    component: UsuarioDataTableComponent
  },
  {
    path: 'yacimientos/add',
    component: YacimientoAddComponent
  },
  {
    path: 'yacimientos/edit/:id',
    component: YacimientoAddComponent
  },
  {
    path: 'yacimientos/list',
    component: YacimientoDataTableComponent
  },
  {
    path: 'turnos/list',
    component: TurnosDataTableComponent
  },
  {
    path: 'aliados/list',
    component: AliadosDataTableComponent
  },
  {
    path: 'factura/compra',
    component: FacturaCompraComponent
  },
  {
    path: 'mineralPrueba',
    component: MineralPruebaComponent
  },
  {
    path: 'mineral/compra',
    component: MineralCompraComponent
  },
  {
    path: 'maquinas/list',
    component: MaquinaDataTableComponent
  },
  {
    path: 'cart',
    component: CarritoComponent
  },
  {
    path: 'cliente/add',
    component: ClienteRegistroComponent
  },
  {
    path: 'clientes/list',
    component: ClienteDataTableComponent
  },
  {
    path: 'maquinas/add',
    component: MaquinaAddComponent
  },
  {
    path: 'clientes/edit/:id',
    component: ClienteRegistroComponent
  },
  {
    path: 'facturas',
    component: FacturasComponent
  },
  {
    path: 'facturas/pendiente',
    component: FacturaPendienteComponent
  },
  {
    path: 'facturas/procesada',
    component: FacturaProcesadaComponent
  },
  {
    path: 'pago',
    component: PagoComponent
  },
  {
    path: 'proyecto/etapa/add',
    component: EtapaAddComponent
  },
  {
    path: 'maquinasProject',
    component: MaquinaProjectDTComponent
  },
  {
    path: 'empleadosp/add',
    component: EmpleadoProjectDTComponent
  },
  {
    path: 'roles/list',
    component: RolesDataTableComponent
  },
  {
    path: 'privilegios/list',
    component: PrivilegioDataTableComponent
  },
  {
    path: 'rol/add',
    component: RolAddComponent
  },
  {
    path: 'rol/edit/:id',
    component: RolAddComponent
  },
  {
    path: 'proyectos/list',
    component: ProyectoDataTatbleComponent
  },
  {
    path: 'proyecto/edit',
    component: ExplotacionEditComponent
  },
  {
    path: 'etapas/list',
    component: EtapaDataTableComponent
  },
  {
    path: 'fases/list',
    component: FaseDataTableComponent
  },
  {
    path: 'etapa/edit',
    component: EtapaEditComponent
  },
  {
    path: 'dataTable',
    component: DataTablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
