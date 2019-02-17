import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/servicios/repository.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  constructor(private repositoryService: RepositoryService) { }
  pedidos: any[] = [];
  verUsuarios = true;
  ngOnInit() {
    this.repositoryService.getModules("pedidos").subscribe(n => {
      for (let elemento in n) {
        this.pedidos.push(n[elemento]);
      }
    });
  }

  deletePedidos(id: any, tabla = 'pedidos') {
    this.repositoryService.deleteModules(id, tabla);
  }

}
