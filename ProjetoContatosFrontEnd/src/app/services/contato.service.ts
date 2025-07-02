import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../interfaces/Contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>('http://localhost:8080/contatos');
  }
  
  saveContato(contato: Contato){
    return this.http.post<Contato>('http://localhost:8080/contatos', contato);
  }

}
