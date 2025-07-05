import { Component } from '@angular/core';
import { Contato } from '../../interfaces/Contato';

@Component({
  selector: 'app-favoritos',
  standalone: false,
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  favoritos: Contato[] = [];
}
