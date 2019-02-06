import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-verproveedor',
  templateUrl: './verproveedor.component.html',
  styleUrls: ['./verproveedor.component.css']
})
export class VerproveedorComponent implements OnInit {
  public cif:string;
  proveedor: any;

  constructor(activateRoute: ActivatedRoute, private proveedoresService: ProveedoresService) {
    this.cif = activateRoute.snapshot.params['cif'];
  }

  ngOnInit() {
    console.log(this.cif);
    this.proveedor = this.proveedoresService.getProveedor(this.cif);
  }

  

}
