import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurfskateTrainningComponent } from './components/surfskate-trainning/surfskate-trainning.component';
import { DecksAndCompletesComponent } from './components/decks-and-completes/decks-and-completes.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { BookingComponent } from './components/booking/booking.component';
import { SpotsComponent } from './components/spots/spots.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    SurfskateTrainningComponent,
    DecksAndCompletesComponent,
    GaleriaComponent,
    ContactoComponent,
    HeaderComponent,
    LoginComponent,
    BookingComponent,
    SpotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
