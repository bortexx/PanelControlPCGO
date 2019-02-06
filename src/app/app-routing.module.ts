import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VerclientesComponent } from './clientes/verclientes/verclientes.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';

//import { NuevoProveedorComponent } from './proveedores/proveedores.component';

//import { BorrarProveedorComponent } from './proveedores/proveedores.component';


const routes: Routes = [

  { path: '', component: InicioComponent },
  //Si pones proveedores carga el componente ProveedoresComponent
  { path: 'clientes', component: VerclientesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'categorias', component: CategoriasComponent },
  //{ path: 'proveedores/:cif', component: VerproveedorComponent },
  //{ path: 'newproveedor', component: NuevoProveedorComponent },
  //{ path: 'deleteproveedor/:id', component: BorrarProveedorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
