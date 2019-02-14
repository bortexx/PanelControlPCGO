import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable()

export class RepositoryService {

  constructor(private http: HttpClient) { }

  configService: any;

  configUrl = 'http://localhost/pcgo/api/';

  getModules(url:any) {
    return this.http.get(this.configUrl + url);
    }    
 

  
    addCliente(url:any,nombre:string,email:string,usuario:string){ 
      let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      let body = new HttpParams();
      body = body.set('nombre', nombre);
      body = body.set('correo', email);
      body = body.set('usuario', usuario);
      let urlPost = this.configUrl + url;
     return this.http.post(urlPost,body,{ headers: myheader}).subscribe(
         response => alert("ok"),
         error => alert ("error") 
        );
      }
  
      addCategoria(url:any,nombre:string){ 
        let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        let body = new HttpParams();
        body = body.set('nombre', nombre);
        let urlPost = this.configUrl + url;
       return this.http.post(urlPost,body,{ headers: myheader}).subscribe(
           response => alert("ok"),
           error => alert ("error") 
          );
        }


        addProductos(url:any,nombre:string,categorias:string,precio:string){ 
          let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
          let body = new HttpParams();
          body = body.set('nombre', nombre);
          body = body.set('categorias', categorias);
          body = body.set('precio', precio);
          let urlPost = this.configUrl + url;
         return this.http.post(urlPost,body,{ headers: myheader}).subscribe(
             response => alert("ok"),
             error => alert ("error") 
            );
          }



    }


   
  
  
