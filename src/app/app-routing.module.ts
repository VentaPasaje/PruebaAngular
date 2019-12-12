import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaComponent } from './pantalla/pantalla.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { HabitacionComponent } from './habitacion/habitacion.component';

const routes: Routes = [
 {  path: '', component: PantallaComponent, pathMatch: 'full'},
  {  path: 'clientes', component: ClienteComponent},
  {  path: 'empleados', component: EmpleadoComponent},
  {  path: 'habitaciones', component: HabitacionComponent},
  {  path: 'sucursales', component: SucursalesComponent},
  {  path: 'pantalla', component: PantallaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
