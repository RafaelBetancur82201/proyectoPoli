import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { IndexclienteComponent } from './indexcliente/indexcliente.component';

const routes: Routes = [  
{path: '',component: IndexclienteComponent},
{path: 'login',component: LoginComponent, canActivate:[LoginGuard]},
{path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
