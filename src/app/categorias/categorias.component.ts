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
  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.getModules("categorias").subscribe(n => {
      for (let elemento in n) {
        this.categorias.push(n[elemento]);
      }
    });
  }

}
