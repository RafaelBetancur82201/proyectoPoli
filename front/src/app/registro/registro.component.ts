import { Component, OnInit } from '@angular/core';
import { NewUser } from '../models/new-user';
import { LoginUser } from '../models/login-user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../services/token.service.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  passequals = true;

  isLoginFail = false;
  errMsj: string | undefined;
  registeruser: NewUser | undefined;
  loginUser: LoginUser | undefined;
  roles: string[] = [];
  submitted = false;
  register: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('')]),
      repeatpassword: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required),
      typedocument: new FormControl('', Validators.required)

    }
  );

  constructor(
    private tokenservice: TokenService,
    private authservice: AuthService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  }
  get f() { return this.register.controls; }
  onRegister() {
    this.submitted = true;
    if (this.register.invalid) {
      return;
    }
    if (!(this.register.get('password')?.value === this.register.get('repeatpassword')?.value)) {
      this.passequals = false;
      return;
    }
    this.passequals = true;
    this.registeruser = new NewUser(this.register.get('name')?.value, this.register.get('lastname')?.value,
      this.register.get('email')?.value, this.register.get('password')?.value, this.register.get('address')?.value,
      this.register.get('document')?.value, this.register.get('typedocument')?.value);
    this.authservice.register(this.registeruser).subscribe({
      next:(data)=> {
        this.loginUser = new LoginUser(this.register.get('email')?.value, this.register.get('password')?.value);
        this.authservice.login(this.loginUser).subscribe(
          {
            next:()=>{
              this.isLoginFail = false;
              this.tokenservice.setToken(data.token);
              this.router.navigate(['/']);
            },
            error:(err)=> {
              this.errMsj = err.error.message;
            },
          }
        );
      },
      error:(err)=>{
        this.errMsj = err.error.message;
      }
    }
    );
  }
}
