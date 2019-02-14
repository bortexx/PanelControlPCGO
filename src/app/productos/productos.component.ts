import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/servicios/repository.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService) { }
  productos: any[] = [];

  public nombreAdd:string;
  public categoriasAdd:string;
  public precioAdd:string;
  verProductos = true;
  modificarProductos = false;
  addProductos = false;
  categorias: any[] = [];
  public pos: Number;

  ngOnInit() {

    this.repositoryService.getModules("productos").subscribe(n => {
      for (let elemento in n) {
        this.productos.push(n[elemento]);
        this.pos = this.categorias.findIndex(m=>m==n[elemento].Tipo);
          if(this.pos<0){
            this.categorias.push(n[elemento].Tipo);
          }
           }
    });

  }

  cambiarCategoriaSeleccionada(cat){
    this.categoriasAdd = cat;
  }

  mandarDatosAdd(){
    this.repositoryService.addProductos("productos",this.nombreAdd,this.categoriasAdd,this.precioAdd);
    window.location.reload();
  }

  cambiarVistaAdd(){
      this.addProductos = true;
      this.verProductos = false;
      this.modificarProductos = false;

    
  }
  
  cambiarVistaVer(){
    this.addProductos = false;
    this.verProductos = true;
    this.modificarProductos = false;

  
}


}
