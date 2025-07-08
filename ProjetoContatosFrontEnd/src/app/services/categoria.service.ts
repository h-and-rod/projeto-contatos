import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiURL = 'https://adjenda.duckdns.org/categorias';

  constructor(private http: HttpClient) { }

  getCategorias() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiURL);
  }

}
