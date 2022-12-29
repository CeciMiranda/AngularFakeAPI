import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmeModel } from './filmes/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  adicionarFilme(filme:FilmeModel): Observable<any>{
    return this.http.post('http://localhost:3000/filmes/', filme);
  }
  
  listarFilmes(): Observable<any>{
    return this.http.get('http://localhost:3000/filmes/');
  }

  atualizarFilme(id: any, aluno: FilmeModel): Observable<any>{
    return this.http.put('http://localhost:3000/filmes/'.concat(id), aluno);
  }
  
  removerFilme(id:any){
    return this.http.delete('http://localhost:3000/filmes/'.concat(id));
  }
}
