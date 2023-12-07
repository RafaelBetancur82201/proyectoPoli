import { Component } from '@angular/core';
import { TokenService } from '../services/token.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexcliente',
  templateUrl: './indexcliente.component.html',
  styleUrls: ['./indexcliente.component.css']
})
export class IndexclienteComponent {

  constructor(private tokenservise:TokenService,private router: Router){}

  onLogOut(): void{
    this.tokenservise.logOut();
    this.router.navigate(['']);
  }

}
