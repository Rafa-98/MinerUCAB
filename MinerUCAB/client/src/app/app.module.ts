import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para data binding
import { FormsModule } from '@angular/forms';

// Para realizar el CRUD
import { HttpClientModule } from '@angular/common/http';

//Importando el modulo de DataTables
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuReportesComponent } from './menu-reportes/menu-reportes.component';
import { AddModEmpleadoComponent } from './add-mod-empleado/add-mod-empleado.component';
import { AddModUsuarioComponent } from './add-mod-usuario/add-mod-usuario.component';
import { CompraAliadoComponent } from './compra-aliado/compra-aliado.component';
import { VentaClienteComponent } from './venta-cliente/venta-cliente.component';
import { CrearYacimientoComponent } from './crear-yacimiento/crear-yacimiento.component';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DataTablesComponent } from './data-tables/data-tables.component';

// Importando Servicios
import { CommonService } from './services/common.service';
import { MineralesComponent } from './minerales/minerales.component';
import { MineralAddComponent } from './mineral-add/mineral-add.component';
import { MineralesDataTableComponent } from './minerales-data-table/minerales-data-table.component';
import { CrudComponent } from './crud/crud.component';
import { EmpleadoDataTableComponent } from './empleado-data-table/empleado-data-table.component';
import { UsuarioDataTableComponent } from './usuario-data-table/usuario-data-table.component';
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
import { FacturaPendienteComponent } from './factura-pendiente/factura-pendiente.component';
import { FacturaProcesadaComponent } from './factura-procesada/factura-procesada.component';
import { FacturasComponent } from './facturas/facturas.component';
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
import { EtapaEditComponent } from './etapa-edit/etapa-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    MenuReportesComponent,
    AddModEmpleadoComponent,
    AddModUsuarioComponent,
    CompraAliadoComponent,
    VentaClienteComponent,
    CrearYacimientoComponent,
    ProductosComponent,
    FooterComponent,
    HeaderComponent,
    DataTablesComponent,
    MineralesComponent,
    MineralAddComponent,
    MineralesDataTableComponent,
    CrudComponent,
    EmpleadoDataTableComponent,
    UsuarioDataTableComponent,
    YacimientoDataTableComponent,
    YacimientoAddComponent,
    UsuarioAddComponent,
    EmpleadoAddComponent,
    TurnosDataTableComponent,
    AliadosDataTableComponent,
    FacturaCompraComponent,
    MineralPruebaComponent,
    MineralCompraComponent,
    MaquinaDataTableComponent,
    CarritoComponent,
    ClienteRegistroComponent,
    ClienteDataTableComponent,
    MaquinaAddComponent,
    FacturaPendienteComponent,
    FacturaProcesadaComponent,
    FacturasComponent,
    PagoComponent,
    EtapaAddComponent,
    MaquinaProjectDTComponent,
    EmpleadoProjectDTComponent,
    RolesDataTableComponent,
    PrivilegioDataTableComponent,
    RolAddComponent,
    ProyectoDataTatbleComponent,
    EtapaDataTableComponent,
    FaseDataTableComponent,
    ExplotacionEditComponent,
    EtapaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [     
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
