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
    MotorbusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
