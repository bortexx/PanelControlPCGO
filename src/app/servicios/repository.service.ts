import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable()

export class RepositoryService {

  constructor(private http: HttpClient) { }
  admin: any[] = [];

  configService: any;

  configUrl = 'http://localhost/pcgo/api/';

  getModules(url: any) {
    return this.http.get(this.configUrl + url);
  }

  checkLogin(password: string, usuario: any) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('usuario', usuario);
    body = body.set('contrasenya', password);
    return this.http.post("http://localhost/pcgo/api/comprueba", body, {
      headers: myheader,
    });
  }
}
  //getProveedores() {
  //return this.proveedores;
  //}


