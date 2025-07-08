import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../interfaces/Contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  apiURL = 'https://adjenda.duckdns.org/contatos';

  pesquisarContatos(filtro: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiURL);
  }
  
  saveContato(contato: Contato){
    return this.http.post<Contato>(this.apiURL, contato);
  }

  deleteContato(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  updateContato(contato: Contato) {
    return this.http.put<Contato>(`${this.apiURL}/${contato.id}`, contato);
  }
}
