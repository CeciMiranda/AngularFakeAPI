import { FilmesService } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { FilmeModel } from './filmes.model';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
    filme: FilmeModel = new FilmeModel();
    filmes: Array<any>  = new Array();
  

  constructor(private filmesServico: FilmesService) {  }

  ngOnInit() {
    this.listarFilmes();
  }

  listarFilmes() {
    this.filmesServico.listarFilmes().subscribe(filmes =>{
        this.filmes = filmes;
    })
  };

  adicionar(){
    console.log(this.filme);
    this.filmesServico.adicionarFilme(this.filme).subscribe(filme => {
        this.filme = new FilmeModel();
        this.listarFilmes();
    }, err => {
        console.log('Erro ao adicionar', err)
    })
  }

  atualizar(id:any){
    this.filmesServico.atualizarFilme(id, this.filme).subscribe(filme => {
      this.filme = new FilmeModel();
      this.listarFilmes();
    }, err => {
      console.log('Erro ao atualizar filme', err)
     })
  }


  remover(id:any){
    this.filmesServico.removerFilme(id).subscribe(filme => {
      this.filme = new FilmeModel();
      this.listarFilmes();
    }, err => {
      console.log('Erro ao atualizar filme', err)
     })
  }
    
}
  
