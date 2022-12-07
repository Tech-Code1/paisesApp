import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { ICountry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: ICountry;

  constructor(private activateRoute: ActivatedRoute,
    private paisServices: PaisService) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.paisServices.getCountryById(id)),
      tap(console.log)
    )
    .subscribe(pais => {
      this.pais = pais;
    })


    /* this.activateRoute.params
    .subscribe( ({ id }) => {
      console.log(id);

      this.paisServices.getCountryById(id)
      .subscribe(pais => {
        console.log(pais);

      })

    } ) */
  }

}
