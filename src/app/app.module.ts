import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { NuevoproveedorcomponentComponent } from './proveedores/nuevoproveedorcomponent/nuevoproveedorcomponent.component';
import { VerproveedorComponent } from './proveedores/verproveedor/verproveedor.component';
import { VerclientesComponent } from './clientes/verclientes/verclientes.component';
import { AsideleftnavComponent } from './asideleftnav/asideleftnav.component';
import { RepositoryService } from 'src/app/servicios/repository.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormsModule } from '@angular/forms';
import { BorrarusuarioComponent } from './clientes/borrarusuario/borrarusuario.component';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    ProveedoresComponent,
    NuevoproveedorcomponentComponent,
    VerproveedorComponent,
    VerclientesComponent,
    AsideleftnavComponent,
    ProductosComponent,
    CategoriasComponent,
    BorrarusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProveedoresService, RepositoryService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
