import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../models/new-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user';
import { JwtDto } from '../models/jwt-dto';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  authURL = "http://lb-loginPrueba-1638423704.us-east-1.elb.amazonaws.com/auth/"
  constructor( private httpclient: HttpClient) { }
  public register(newuser:NewUser):Observable<any>{
    return this.httpclient.post<any>(this.authURL +'newuser', newuser);
  }
  public login(loginuser:LoginUser):Observable<JwtDto>{
    return this.httpclient.post<JwtDto>(this.authURL +'login', loginuser);
  }
  public refresh(dto:JwtDto):Observable<JwtDto>{
    return this.httpclient.post<JwtDto>(this.authURL +'refresh', dto);
  }
}