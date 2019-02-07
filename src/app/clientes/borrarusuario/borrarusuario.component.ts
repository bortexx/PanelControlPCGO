import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-borrarusuario',
  templateUrl: './borrarusuario.component.html',
  styleUrls: ['./borrarusuario.component.css']
})
export class BorrarusuarioComponent implements OnInit {

  constructor(router: Router) { }
  //esto es para redirigir de nuevo al router
  router;
  ngOnInit() {

  }

}
