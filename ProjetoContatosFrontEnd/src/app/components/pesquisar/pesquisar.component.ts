import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/Categoria';
import { CategoriaService } from '../../services/categoria.service';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../interfaces/Contato';

@Component({
  selector: 'app-pesquisar',
  standalone: false,
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  categorias: Categoria [] = [];
  contatos: Contato[] = [];
  contatosFiltrados: Contato[] = [];
  contato: Contato = {} as Contato;
  filtro: any = { categoria: '', favorito: '', bloqueado: '' };
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
        this.contatosFiltrados = dados;
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

  saveContato() {
    
    this.contatoService.saveContato(this.contato).subscribe(
      {
        next: dado => {
          this.contatos.push(dado);
          this.contato = {} as Contato;
        }
      })
  }

  pesquisar() {
    this.contatosFiltrados = this.contatos.filter(contato => {
      const nomeMatch = !this.filtro.nome || contato.nome?.toLowerCase().includes(this.filtro.nome.toLowerCase());
      const apelidoMatch = !this.filtro.apelido || contato.apelido?.toLowerCase().includes(this.filtro.apelido.toLowerCase());
      const emailMatch = !this.filtro.email || contato.email?.toLowerCase().includes(this.filtro.email.toLowerCase());
      const telefoneMatch = !this.filtro.telefone || contato.telefone?.includes(this.filtro.telefone);
      const categoriaMatch = !this.filtro.categoria || contato.categoria?.nome === this.filtro.categoria;
      const favoritoMatch = this.filtro.favorito === undefined || this.filtro.favorito === '' || contato.favorito === (this.filtro.favorito === 'true' || this.filtro.favorito === true);
      const bloqueadoMatch = this.filtro.bloqueado === undefined || this.filtro.bloqueado === '' || contato.bloqueado === (this.filtro.bloqueado === 'true' || this.filtro.bloqueado === true);

      return nomeMatch && apelidoMatch && emailMatch && telefoneMatch && categoriaMatch && favoritoMatch && bloqueadoMatch;
    });
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