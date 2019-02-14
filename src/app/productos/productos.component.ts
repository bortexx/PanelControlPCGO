import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from 'src/app/servicios/repository.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService, private route: Router) { }
  productos: any[] = [];

  ngOnInit() {

    this.repositoryService.getModules("productos").subscribe(n => {
      for (let elemento in n) {
        this.productos.push(n[elemento]);
      }
    });
  }

  deleteProducto(id: any, tabla='productos') {
    this.repositoryService.deleteModules(id, tabla);
  }

}
