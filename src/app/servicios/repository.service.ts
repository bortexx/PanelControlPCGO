import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()

export class RepositoryService {

  //http:any;
  router: Router;
  constructor(private http: HttpClient, private route: Router) {
    //this.http=mihttp;
    this.router = route;
  }

  configService: any;

  configUrl = 'http://localhost/pcgo/api/';

  getModules(url: any) {
    return this.http.get(this.configUrl + url);
  }

  deleteModules(id: any , tabla:String) {
    let myHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.delete("http://localhost/pcgo/api/"+ tabla +"/" + id).subscribe((data) => {
      location.reload();
    });
  }



}