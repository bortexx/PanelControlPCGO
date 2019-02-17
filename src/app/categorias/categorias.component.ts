import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/servicios/repository.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent implements OnInit {
  categorias: any[] = []
  public verCategorias = true;
  public modificarCategorias = false;
  public idModificar: Number;
  public nombreModificar: string;
  public nombreAdd: string;
  verCategoria = true;
  modificarCategoria = false;
  addCategoria = false;


  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.getModules("categorias").subscribe(n => {
      for (let elemento in n) {
        this.categorias.push(n[elemento]);
      }
    });
  }

  editarCategoria(categoria) {
    this.idModificar = categoria.id;
    this.nombreModificar = categoria.Nombre;
    this.verCategorias = false;
    this.modificarCategorias = true;
  }

  confirmarEditarCategoria() {
    this.verCategorias = true;
    this.modificarCategorias = false;
    this.repositoryService.editarCategoria("categorias", this.idModificar, this.nombreModificar);
    window.location.href = "";
  }


  mandarDatosAdd() {
    this.repositoryService.addCategoria("categorias", this.nombreAdd);
  
    window.location.href = "";
  }

  cambiarVistaAdd() {
    this.addCategoria = true;
    this.verCategorias = false;
    this.modificarCategoria = false;
  }

  cambiarVistaVer() {
    this.addCategoria = false;
    this.verCategorias = true;
    this.modificarCategoria = false;
  }


  deleteCategorias(id: any, tabla = 'categorias') {
    this.repositoryService.deleteModules(id, tabla);
  }
}
