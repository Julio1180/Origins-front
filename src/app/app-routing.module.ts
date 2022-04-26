import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DecksAndCompletesComponent } from './components/decks-and-completes/decks-and-completes.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SpotsComponent } from './components/spots/spots.component';
import { SurfskateTrainningComponent } from './components/surfskate-trainning/surfskate-trainning.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "home", component: HeaderComponent },
  { path: "galeria", component: GaleriaComponent },
  { path: "decks-and-completes", component: DecksAndCompletesComponent },
  { path: "surfskatetrainning", component: SurfskateTrainningComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "login", component: LoginComponent },
  { path: "booking", component: BookingComponent },
  { path: "spots", component: SpotsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
