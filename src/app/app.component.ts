import { Component } from '@angular/core';
import { RepositoryService } from 'src/app/servicios/repository.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private repositoryService: RepositoryService,  private cookieService: CookieService) { }
  
  title = 'routing';
  login = true;
  logged = false;
  contrasenya: any = ""
  usuario: any = ""
  admin: any[] = [];

  ngOnInit() {
    this.logged = false;
    this.login = true;
    if (this.cookieService.check('login') == true ){
      this.logged = true;
      this.login = false;
      console.log("hola");
    }

  }

  public loginAdmin() {
    this.repositoryService.checkLogin(this.contrasenya, this.usuario).subscribe(n => {
      for (let elemento in n) {
        this.admin.push(n[elemento]);
        console.log(n['status']);
        if (n['status'] == "ok") {
          this.cookieService.set( 'login', this.usuario );
          window.location.href = "";

         // this.router.navigate("/");         
        }
      }
    });
  }


}
