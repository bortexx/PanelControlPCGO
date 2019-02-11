import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit() {

  }
  public logout() {
    if (this.cookie.check("login") == true) {
      this.cookie.delete("login");
      window.location.href = "";
    }
  }
}
