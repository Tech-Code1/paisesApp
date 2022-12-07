import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU', 'AU', 'EEU', 'ASEAN', 'NAFTA'];
  regionActiva: string = '';
  termino: string = ""
  hayError: boolean = false;
  paises: ICountry[] = []

  constructor(private paisServices: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
    ? 'btn btn-primary'
    : 'btn btn-outline-primary'
  }

  ngOnInit(): void {
  }

  activarRegion(region: string): void {
    if(region === this.regionActiva) { return; }
    this.regionActiva = region;

    this.buscar(region)
  }

  buscar(region: string) {

    this.hayError = false;
    this.paises = [];

    this.paisServices.buscarRegion(region)
    .subscribe( {
      next: (resp) => {this.paises = resp; this.hayError = false},
      error: (err) => {this.hayError = true; this.paises = []}
    })
  }

  sugerencias(termino: string){
  }
}
