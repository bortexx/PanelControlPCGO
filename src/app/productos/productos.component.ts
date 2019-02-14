import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/servicios/repository.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService) { }
  productos: any[] = [];
  categorias: any[] = [];
  public pos: Number;
  public verProductos = true;
  public modificarProducto = false;
  public idModificar: Number;
  public nombreModificar: string;
  public categoriaModificar: string;
  public categoriaProducto: string;
  public precioModificar: Number;
  public nombreAdd: string;
  public categoriasAdd: string;
  public precioAdd: string;
  modificarProductos = false;
  addProductos = false;

  ngOnInit() {
    this.repositoryService.getModules("productos").subscribe(n => {
      this.categorias.length = 0;
      for (let elemento in n) {
        this.productos.push(n[elemento]);
        this.pos = this.categorias.findIndex(m => m == n[elemento].Tipo);
        if (this.pos < 0) {
          this.categorias.push(n[elemento].Tipo);
        }
      }
    });
  }

  deleteProducto(id: any, tabla = 'productos') {
    this.repositoryService.deleteModules(id, tabla);
  }

  cambiarVista() {
    this.verProductos = true;
    this.modificarProducto = false;
  }

  editarProducto(producto) {
    this.verProductos = false;
    this.modificarProducto = true;
    this.idModificar = producto.id;
    this.nombreModificar = producto.nombreCarta;
    this.precioModificar = producto.precio;
    this.categoriaProducto = producto.Tipo;
  }

  mandarDatosEditar() {
    this.verProductos = true;
    this.modificarProducto = false;
    this.repositoryService.editarProducto("productos", this.idModificar, this.nombreModificar, this.categoriaModificar, this.precioModificar);
    window.location.reload();
  }

  addCategoriaSeleccionada(cat:string) {
    console.log(cat);
    this.categoriasAdd = cat;
  }


  cambiarCategoriaSeleccionada(cat:string) {
    this.categoriaModificar = cat;
  }

  mandarDatosAdd() {
    this.repositoryService.addProductos("productos", this.nombreAdd, this.categoriasAdd, this.precioAdd);
    window.location.reload();

  }

  cambiarVistaAdd() {
    this.addProductos = true;
    this.verProductos = false;
    this.modificarProductos = false;


  }

  cambiarVistaVer() {
    this.addProductos = false;
    this.verProductos = true;
    this.modificarProductos = false;


  }


}
