import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrientationComponent } from './orientation/orientation.component';
import { SaisonComponent } from './saison/saison.component';
import { ColoriageComponent } from './coloriage/coloriage.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';


@NgModule({
  declarations: [
    AppComponent,
    OrientationComponent,
    SaisonComponent,
    ColoriageComponent,
    EtudiantsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
