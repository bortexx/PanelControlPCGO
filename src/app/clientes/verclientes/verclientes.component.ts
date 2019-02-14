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

  public nombreAdd:string;
  public usuarioAdd:string;
  public correoAdd:string;
  verUsuarios = true;
  modificarUsuario = false;
  addUsuario = false;

  constructor(activateRoute: ActivatedRoute, private repositoryService: RepositoryService) { }
  
  ngOnInit() {
    this.repositoryService.getModules("usuarios").subscribe(n => {
      for (let elemento in n) {
        this.clientes.push(n[elemento]);
        console.log(n[elemento]);
      }
    });

  }


  mandarDatosAdd(){
    this.repositoryService.addCliente("registro",this.nombreAdd,this.correoAdd,this.usuarioAdd);
    window.location.reload();
  }

  cambiarVistaAdd(){
      this.addUsuario = true;
      this.verUsuarios = false;
      this.modificarUsuario = false;

    
  }
  
  cambiarVistaVer(){
    this.addUsuario = false;
    this.verUsuarios = true;
    this.modificarUsuario = false;

  
}


}