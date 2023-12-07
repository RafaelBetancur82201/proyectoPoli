import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { Registro1Component } from './registro1/registro1.component';
import { Registro2Component } from './registro2/registro2.component';
import { LoginComponent } from './login/login.component';
import { IndexclienteComponent } from './indexcliente/indexcliente.component';
import { IndextrabajadorComponent } from './indextrabajador/indextrabajador.component';
import { ContratoComponent } from './contrato/contrato.component';
import { MotorbusquedaComponent } from './motorbusqueda/motorbusqueda.component';

import{HttpClientModule}from'@angular/common/http';
import{FormsModule}from'@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { TablarComponent } from './tablar/tablar.component'  
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    Registro1Component,
    Registro2Component,
    LoginComponent,
    IndexclienteComponent,
    IndextrabajadorComponent,
    ContratoComponent,
    MotorbusquedaComponent,
    PaginaprincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    TablarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
