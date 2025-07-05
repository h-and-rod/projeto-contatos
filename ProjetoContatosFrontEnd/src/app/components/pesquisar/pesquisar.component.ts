import { Component } from '@angular/core';
import { Contato } from '../../interfaces/Contato';

@Component({
  selector: 'app-pesquisar',
  standalone: false,
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent {
  contatos: Contato[] = [];

}
