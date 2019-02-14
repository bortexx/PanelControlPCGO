import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
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
  providers: [RepositoryService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
