import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormularioDatospersonalesComponent} from "./formulario-datospersonales/formulario-datospersonales.component";
import { FormularioReferenciaComponent } from './formulario-referencia/formulario-referencia.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FormularioDisponibilidadComponent } from './formulario-disponibilidad/formulario-disponibilidad.component';

@NgModule({
    declarations: [
        AppComponent,
        FormularioDatospersonalesComponent,
        FormularioReferenciaComponent,
        EncabezadoComponent,
        FormularioDisponibilidadComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
