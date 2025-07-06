import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/Categoria';
import { Contato } from '../../interfaces/Contato';
import { CategoriaService } from '../../services/categoria.service';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent implements OnInit {

  categorias: Categoria[] = [];
  contatos: Contato[] = [];
  contato: Contato = {} as Contato;

  constructor(private categoriaService: CategoriaService, private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.loadContatos();
    this.loadCategorias();
  }

  loadContatos() {
    this.contatoService.getContatos().subscribe({
      next: dados => { this.contatos = dados; }
    });
  }

  loadCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: dado => { this.categorias = dado; }
    });
  }

  saveContato() {
    this.contatoService.saveContato(this.contato).subscribe({
      next: dado => {
        this.contatos.push(dado);
        this.contato = {} as Contato;
      }
    })
  }
}
