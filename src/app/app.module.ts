import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { PizzeriaModModule } from './practicas/act-pizzeria/pizzeria-mod/pizzeria-mod.module';
import { PracticasComponent } from './practicas/practicas/practicas.component';
import { DistanciasModModule } from './practicas/act-distancia/distancias-mod/distancias-mod.module';
import { ResistenciasModModule } from './practicas/act-resistencias/resistencias-mod/resistencias-mod.module';
import { CinepolisModModule } from './practicas/act-cinepolis/cinepolis_mod/cinepolis-mod.module';

@NgModule({
  declarations: [
    AppComponent,
    PracticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    DistanciasModModule,
    ResistenciasModModule,
    CinepolisModModule,
    PizzeriaModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
