import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/Categoria';
import { CategoriaService } from '../../services/categoria.service';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../interfaces/Contato';

@Component({
  selector: 'app-contatos',
  standalone: false,
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})

export class ContatosComponent implements OnInit {
  
  categorias: Categoria [] = [];
  contatos: Contato[] = [];
  contato: Contato = {} as Contato;

  constructor(private categoriaService: CategoriaService, private contatoService: ContatoService) { }

  ngOnInit(): void {

    this.categoriaService.getCategorias().subscribe(
      {
        next: dado => { this.categorias = dado;}
      }
    );

    this.contatoService.getContatos().subscribe(
      {
        next: dados => {this.contatos = dados;}
      }
    );
  }

  saveContato() {
    
    this.contatoService.saveContato(this.contato).subscribe(
      {
        next: dado => {
          this.contatos.push(dado);
          this.contato = {} as Contato;
        }
      }
    )
  }

}