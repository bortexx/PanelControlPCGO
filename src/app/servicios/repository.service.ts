import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable()

export class RepositoryService {

  constructor(private http: HttpClient) { }
  admin: any[] = [];

  configService: any;

  configUrl = 'http://pcgo.pve2.fpmislata.com/api/';

  getModules(url: any) {
    return this.http.get(this.configUrl + url);
  }

  checkLogin(password: string, usuario: any) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('usuario', usuario);
    body = body.set('contrasenya', password);
    return this.http.post("http://pcgo.pve2.fpmislata.com/api/comprueba", body, {
      headers: myheader,
    });
  }

  deleteModules(id: any, tabla: String) {
    let myHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.delete("http://pcgo.pve2.fpmislata.com/api/" + tabla + "/" + id).subscribe((data) => {
      window.location.href = "";
    });
  }

  editarCliente(url: any, id: any, nombreCambiar: string, emailCambiar: string, usuarioCambiar: string) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('nombre', nombreCambiar);
    body = body.set('email', emailCambiar);
    body = body.set('usuario', usuarioCambiar);
    let urlPut = "http://pcgo.pve2.fpmislata.com/api/" + url;
    return this.http.put(urlPut, body, { headers: myheader }).subscribe(

    );
  }

  editarCategoria(url: any, id: any, nombreCambiar: string) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('nombre', nombreCambiar);
    let urlPut = "http://pcgo.pve2.fpmislata.com/api/" + url;
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
    let urlPut = "http://pcgo.pve2.fpmislata.com/api/" + url;
    return this.http.put(urlPut, body, { headers: myheader }).subscribe(

    );
  }




  addCliente(url: any, nombre: string, email: string, usuario: string) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('correo', email);
    body = body.set('usuario', usuario);
    let urlPost = "http://pcgo.pve2.fpmislata.com/api/" + url;
    return this.http.post(urlPost, body, { headers: myheader }).subscribe(

    );
  }

  addCategoria(url: any, nombre: string) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    let urlPost = "http://pcgo.pve2.fpmislata.com/api/" + url;
    return this.http.post(urlPost, body, { headers: myheader }).subscribe(
      response => alert("ok"),
      error => alert("error")
    );
  }


  addProductos(url: any, nombre: string, categorias: string, precio: string) {
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('categorias', categorias);
    body = body.set('precio', precio);
    let urlPost = "http://pcgo.pve2.fpmislata.com/api/" + url;
    return this.http.post(urlPost, body, { headers: myheader }).subscribe(
      response => alert("Producto Insertado Correctamente"),
      error => alert("error")
    );
  }



}





