import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaComponent } from './pantalla/pantalla.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { HabitacionComponent } from './habitacion/habitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaComponent,
    ClienteComponent,
    EmpleadoComponent,
    SucursalesComponent,
    HabitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
