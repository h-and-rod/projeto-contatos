import { Component } from '@angular/core';
import { Contato } from '../../interfaces/Contato';
import { Categoria } from '../../interfaces/Categoria';
import { CategoriaService } from '../../services/categoria.service';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-bloqueados',
  standalone: false,
  templateUrl: './bloqueados.component.html',
  styleUrl: './bloqueados.component.css'
})
export class BloqueadosComponent {
  bloqueados: Contato[] = [];
  
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
    this.contatoService.getContatos().subscribe({
      next: dados => {
        this.contatos = dados;
        this.bloqueados = this.contatos.filter(contato => contato.bloqueado);
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

  desbloquearContato(contato: Contato) {
    contato.bloqueado = false;
    this.contatoService.updateContato(contato).subscribe({
      next: (contatoAtualizado) => {
        this.bloqueados = this.contatos.filter(c => c.bloqueado);
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
        this.bloqueados = this.contatos.filter(c => c.bloqueado);
        this.fecharModalEditar();
      }
    });
  }
}
