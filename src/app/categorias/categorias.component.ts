import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/servicios/repository.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent implements OnInit {
categorias:any[] = []


public nombreAdd:string;
verCategoria = true;
modificarCategoria = false;
addCategoria = false;


  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.getModules("categorias").subscribe(n => {
      for (let elemento in n) {
        this.categorias.push(n[elemento]);
        console.log(n[elemento]);
      }
    });
  }


  mandarDatosAdd(){
    this.repositoryService.addCategoria("categorias",this.nombreAdd);
    window.location.reload();
  }

  cambiarVistaAdd(){
      this.addCategoria = true;
      this.verCategoria = false;
      this.modificarCategoria = false;

    
  }
  
  cambiarVistaVer(){
    this.addCategoria = false;
    this.verCategoria = true;
    this.modificarCategoria = false;

  
}



}
