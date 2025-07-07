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
  mostrarModalEditar: boolean = false;
  contatoEditando: any = {};

  constructor(private categoriaService: CategoriaService, private contatoService: ContatoService) { }

  ngOnInit(): void {
   
    this.loadContatos();
    this.loadCategorias();
    
  }
  
  loadContatos() {
   
    this.contatoService.getContatos().subscribe(
      {
        next: dados => {this.contatos = dados;}
      }
    );  

  }

  loadCategorias() {   
    
    this.categoriaService.getCategorias().subscribe(
      {
        next: dado => { this.categorias = dado;}
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
      })
  }

  deleteContato(contatos: Contato) {
    const confirmar = confirm(`Tem certeza que deseja excluir o contato "${contatos.nome}"?`);
    if (confirmar) {
      this.contatoService.deleteContato(contatos.id).subscribe({
        next: () => this.loadContatos()
    });
  }
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
        this.fecharModalEditar();
      }
    });
  }
}
