import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/servicios/repository.service';

@Component({
  selector: 'app-verclientes',
  templateUrl: './verclientes.component.html',
  styleUrls: ['./verclientes.component.css']
})
export class VerclientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService) { }
  ngOnInit() {
    this.repositoryService.getModules("usuarios").subscribe(n => {
      for (let elemento in n) {
        this.clientes.push(n[elemento]);
      }
    });


  }
}