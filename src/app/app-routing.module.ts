import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanciasComponent } from './practicas/act-distancia/distancias/distancias.component';
import { ResistenciasComponent } from './practicas/act-resistencias/resistencias/resistencias.component';
import { CinepolisComponent } from './practicas/act-cinepolis/cinepolis/cinepolis.component';
import { PizzeriaComponent } from './practicas/act-pizzeria/pizzeria/pizzeria.component';

const routes:Routes=[
  {path: '', redirectTo: "/home", pathMatch:'full'},
  {path: 'distancia',component: DistanciasComponent},
  {path: 'resistencias',component: ResistenciasComponent},
  {path: 'pizzeria',component: PizzeriaComponent},
  {path: 'cinepolis', component: CinepolisComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
