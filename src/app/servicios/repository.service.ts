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
  editarCliente(url: any, id: any, nombreCambiar: string, emailCambiar: string, usuarioCambiar: string) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('nombre', nombreCambiar);
    body = body.set('email', emailCambiar);
    body = body.set('usuario', usuarioCambiar);
    let urlPut = this.configUrl + url;
    return this.http.put(urlPut, body, { headers: myheader }).subscribe(

    );
  }

  editarCategoria(url: any, id: any, nombreCambiar: string) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('nombre', nombreCambiar);
    let urlPut = this.configUrl + url;
    return this.http.put(urlPut, body, { headers: myheader }).subscribe(

    );
  }

  editarProducto(url: any, id: any, nombreCambiar: string, categoriaCambiar: string, precioCambiar: any) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('nombre', nombreCambiar);
    body = body.set('categoria', categoriaCambiar);
    body = body.set('precio', precioCambiar);
    let urlPut = this.configUrl + url;
    return this.http.put(urlPut, body, { headers: myheader }).subscribe(

    );
  }



}



