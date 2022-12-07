import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = ""
  hayError: boolean = false;
  paises: ICountry[] = []

  constructor(private paisServices: PaisService) { }

  ngOnInit(): void {
  }


  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisServices.buscarCapital(termino)
    .subscribe( {
      next: (resp) => {this.paises = resp; this.hayError = false},
      error: (err) => {this.hayError = true; this.paises = []}
    })
  }
}
