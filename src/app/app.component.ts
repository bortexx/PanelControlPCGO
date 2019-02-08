import { Component } from '@angular/core';
import { RepositoryService } from 'src/app/servicios/repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private repositoryService: RepositoryService) { }

  title = 'routing';
  login = true;
  logged = false;
  contrasenya: any = ""
  usuario: any = ""
  admin: any[] = [];

  ngOnInit() {
    this.logged = false;
    this.login = true;
  }

  public loginAdmin() {

    this.repositoryService.checkLogin(this.contrasenya, this.usuario)/*.subscribe(n => {
      for (let elemento in n) {
        this.admin.push(n[elemento]);
        console.log(n);
      }
      console.log(hola);

    });
*/
  }
}
