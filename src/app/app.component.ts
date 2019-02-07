import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  login = true;
  logged = false;
  contrasenya: any = ""
  usuario: any = ""

  ngOnInit() {
    this.logged = true;
    this.login = false;
  }

  public loginAdmin() {
    console.log(this.contrasenya)
    console.log(this.usuario)

  }
}
