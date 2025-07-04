import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContatosComponent,
    HeaderComponent,
    CadastrarComponent,
    PesquisarComponent,
    FavoritosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

