import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = ""
  hayError: boolean = false;
  paises: ICountry[] = []
  paisesSugeridos: ICountry[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisServices: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisServices.buscarPais(termino)
    .subscribe( {
      next: (resp) => {this.paises = resp; this.hayError = false},
      error: (err) => {this.hayError = true; this.paises = []}
    })
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;

    termino === ""
    ? this.mostrarSugerencias = false
    : this.mostrarSugerencias = true

    this.paisServices.buscarPais(termino)
    .subscribe(
      {
        next: paises => this.paisesSugeridos = paises.splice(0, 5),
        error: err => this.paisesSugeridos = []
      })
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }
}
