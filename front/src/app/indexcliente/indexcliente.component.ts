import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TokenService } from '../services/token.service.service';

const NAME = 'Nombre';

@Component({
  selector: 'app-indexcliente',
  templateUrl: './indexcliente.component.html',
  styleUrls: ['./indexcliente.component.css']
})

export class IndexclienteComponent implements OnInit {

  name: any;

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit() {
    this.name = window.localStorage.getItem(NAME);
    console.log(this.name);
  }

  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['']);
  }

}