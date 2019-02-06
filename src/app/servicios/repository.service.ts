import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
@Injectable()

export class RepositoryService {

  constructor(private http: HttpClient) { }

  configService: any;

  configUrl = 'http://localhost/pcgo/api/';

  getModules(url:any) {
    return this.http.get(this.configUrl + url);
    }    
  }

  //getProveedores() {
  //return this.proveedores;
  //}


