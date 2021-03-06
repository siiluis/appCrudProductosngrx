import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './select-categoria/categoria.Model';
@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private categoriasUrl = 'http://localhost:3000/categorias';
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriasUrl);
  }
}
