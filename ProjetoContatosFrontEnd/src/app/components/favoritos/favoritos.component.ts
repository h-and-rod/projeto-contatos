import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/Categoria';
import { CategoriaService } from '../../services/categoria.service';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../interfaces/Contato';

@Component({
  selector: 'app-favoritos',
  standalone: false,
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  favoritos: Contato[] = [];
  
  categorias: Categoria [] = [];
  contatos: Contato[] = [];

  mostrarModalEditar: boolean = false;
  contatoEditando: any = {};

  constructor(private categoriaService: CategoriaService, private contatoService: ContatoService) { }

  ngOnInit(): void {
   
    this.loadContatos();
    this.loadCategorias();
    
  }
  
  loadContatos() {
  this.contatoService.getContatos().subscribe({
    next: dados => {
      this.contatos = dados;
      this.favoritos = this.contatos.filter(contato => contato.favorito);
    }
  });
}

  loadCategorias() {   
    
    this.categoriaService.getCategorias().subscribe(
      {
        next: dado => { this.categorias = dado;}
      }
    );

  }

  desfavoritarContato(contato: Contato) {
    contato.favorito = false;
    this.contatoService.updateContato(contato).subscribe({
      next: (contatoAtualizado) => {
        this.favoritos = this.contatos.filter(c => c.favorito);
      }
    });
  }

  abrirPopupEditar(contato: any) {
    this.contatoEditando = { ...contato };
    if (this.categorias && contato.categoria) {
      const categoriaEncontrada = this.categorias.find(c => c.id === contato.categoria.id);
      this.contatoEditando.categoria = categoriaEncontrada || null;
    }
    this.mostrarModalEditar = true;
  }

  fecharModalEditar() {
    this.mostrarModalEditar = false;
  }

  salvarEdicaoContato() {
    this.contatoService.updateContato(this.contatoEditando).subscribe({
      next: (contatoAtualizado) => {
        const idx = this.contatos.findIndex(c => c.id === contatoAtualizado.id);
        if (idx > -1) this.contatos[idx] = contatoAtualizado;
        this.favoritos = this.contatos.filter(c => c.favorito);
        this.fecharModalEditar();
      }
    });
  }
}