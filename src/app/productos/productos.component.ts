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

  ngOnInit() {

    this.repositoryService.getModules("productos").subscribe(n => {
      for (let elemento in n) {
        this.productos.push(n[elemento]);
        console.log(n[elemento]);
      }
    });



  }

}
