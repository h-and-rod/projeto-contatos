import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent },
  {path: 'listadecontatos', component: ContatosComponent },
  {path: 'cadastrar', component: CadastrarComponent },
  {path: 'pesquisar', component: PesquisarComponent },
  {path: 'favoritos', component: FavoritosComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
