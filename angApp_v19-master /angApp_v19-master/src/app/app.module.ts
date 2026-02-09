import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // <-- IMPORTAR AQUÍ
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ListadoComponent,
    FavoritosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- AÑADIR AQUÍ
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
