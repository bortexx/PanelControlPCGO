import { Component } from '@angular/core';
import { RepositoryService } from 'src/app/servicios/repository.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private repositoryService: RepositoryService, private cookieService: CookieService) { }

  title = 'routing';
  login = false;
  logged = true;
  contrasenya: any = ""
  usuario: any = ""
  admin: any[] = [];

  ngOnInit() {
    this.logged = false;
    this.login = true;
    if (this.cookieService.check('login') == true) {
      this.logged = true;
      this.login = false;
    }
  }
  public loginAdmin() {
    this.repositoryService.checkLogin(this.contrasenya, this.usuario).subscribe(n => {
      for (let elemento in n) {
        this.admin.push(n[elemento]);
        if (n['status'] == "ok" && n['admin'] == 1) {
          this.cookieService.set('login', this.usuario);
          window.location.href = "";
        }
      }
    });
  }
}
