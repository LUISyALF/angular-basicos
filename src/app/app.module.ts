import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';


import { HeroesModule } from './heroes/heroes.modulo';



@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    contadorModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
