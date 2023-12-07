import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginUser } from '../models/login-user';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLogged = false;
  isLoginFail = false;
  loginUser: LoginUser | undefined;
  roles: string[] = [];
  errMsj: string | undefined;
  Login:FormGroup=new FormGroup(
    {
      email :new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',Validators.required)
    }
  );
  constructor(
    private tokenservice: TokenService,
    private authservice: AuthService,
    private router: Router,
  ) { }
  ngOnInit() {
    
  }
  onLogin() {
    this.loginUser = new LoginUser(this.Login.get('email')?.value, this.Login.get('password')?.value);
    this.authservice.login(this.loginUser).subscribe(
     {
      next:(data) => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenservice.setToken(data.token);
        this.router.navigate(['/pag']);
      },
      error:(err) => {
        this.isLogged = false;
        this.errMsj = err.error.message;
      }
     }


      
    );
  }
}
