import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaderResponse, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable()

export class RepositoryService {

  constructor(private http: HttpClient) { }

  configService: any;

  configUrl = 'http://localhost/pcgo/api/';

  getModules(url:any) {
    return this.http.get(this.configUrl + url);
    }    

    editarCliente(url:any,id:any,nombreCambiar:string,emailCambiar:string,usuarioCambiar:string){ 
    let myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('nombre', nombreCambiar);
    body = body.set('email', emailCambiar);
    body = body.set('usuario', usuarioCambiar);
    let urlPut = this.configUrl + url;
    
   return this.http.put(urlPut,body,{ headers: myheader}).subscribe(
        
      );
    }

  

  
  
}

