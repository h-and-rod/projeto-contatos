import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../interfaces/Contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  pesquisarContatos(filtro: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>('http://localhost:8080/contatos');
  }
  
  saveContato(contato: Contato){
    return this.http.post<Contato>('http://localhost:8080/contatos', contato);
  }

  deleteContato(id: number) {
  return this.http.delete(`http://localhost:8080/contatos/${id}`);
  }

  updateContato(contato: Contato) {
    return this.http.put<Contato>(`http://localhost:8080/contatos/${contato.id}`, contato);
  }
}
