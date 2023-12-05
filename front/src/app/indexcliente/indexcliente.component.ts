import { Component } from '@angular/core';
import { TokenService } from '../services/token.service.service';

@Component({
  selector: 'app-indexcliente',
  templateUrl: './indexcliente.component.html',
  styleUrls: ['./indexcliente.component.css']
})
export class IndexclienteComponent {

  constructor(private tokenservise:TokenService){}

  onLogOut(): void{
    this.tokenservise.logOut();
    window.location.reload();
  }

}
