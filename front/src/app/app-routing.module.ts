import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { IndexclienteComponent } from './indexcliente/indexcliente.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [  
{path: 'login',component: LoginComponent, canActivate:[LoginGuard]},
{path: 'register',component: RegistroComponent},
{path: '',component: PaginaprincipalComponent},
{path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
