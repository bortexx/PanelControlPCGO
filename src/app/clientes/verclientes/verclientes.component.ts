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
  verUsuarios = true;
  modificarUsuario = false;
  addUsuario = false;

  public idModificar: Number;
  public nombreModificar: string;
  public usuarioModificar: string;
  public correoModificar: string;

  public nombreAdd: string;
  public usuarioAdd: string;
  public correoAdd: string;

  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.getModules("usuarios").subscribe(n => {
      for (let elemento in n) {
        this.clientes.push(n[elemento]);
      }
    });
  }

  editarCliente(cliente) {
    this.cambiarVista();
    this.idModificar = cliente.id;
    this.nombreModificar = cliente.nombre;
    this.correoModificar = cliente.correoElectronico;
    this.usuarioModificar = cliente.nombreUsuario;
  }

  mandarDatosEditar() {
    this.verUsuarios = true;
    this.modificarUsuario = false;
    this.repositoryService.editarCliente("usuarios", this.idModificar, this.nombreModificar, this.correoModificar, this.usuarioModificar);
    window.location.reload();
  }

  cambiarVista() {
    this.verUsuarios = false;
    this.modificarUsuario = true;
  }


  mandarDatosAdd() {
    this.repositoryService.addCliente("registro", this.nombreAdd, this.correoAdd, this.usuarioAdd);
    window.location.reload();
  }

  cambiarVistaAdd() {
    this.addUsuario = true;
    this.verUsuarios = false;
    this.modificarUsuario = false;
  }

  cambiarVistaVer() {
    this.addUsuario = false;
    this.verUsuarios = true;
    this.modificarUsuario = false;


  }

  
  deleteClientes(id: any, tabla='usuarios') {
    this.repositoryService.deleteModules(id, tabla);
  }


}