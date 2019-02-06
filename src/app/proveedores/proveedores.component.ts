import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})

export class ProveedoresComponent implements OnInit {
  proveedores: any;

  datosProveedor:any;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedores = this.proveedoresService.getProveedores();
  }

  nuevoProveedor() {
    let nombre= prompt('TelefÃ³nica');
    let cif= prompt('cif');
    let direccion = prompt('direccion');
    let cp:any= prompt('cp');
    let localidad= prompt('localidad');
    let provincia = prompt('provincia');
    let telefono = prompt('telefono');
    let email = prompt('email');
    let contacto = prompt('contacto');
    this.proveedoresService.newProveedores(nombre,cif,direccion,cp,localidad,provincia,telefono,email,contacto);

  }

}
