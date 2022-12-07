import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ICountry } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2/'

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population')
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<ICountry[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/capital/${termino}`

    return this.http.get<ICountry[]>(url, {params: this.httpParams});
  }

  buscarRegion(termino: string): Observable<ICountry[]> {



    const url = `${this.apiUrl}/regionalbloc/${termino}`

    return this.http.get<ICountry[]>(url, {params: this.httpParams})
    .pipe(
      tap(console.log))
  }

  getCountryById(id: string): Observable<ICountry> {
    const url = `${this.apiUrl}/alpha/${id}`

    return this.http.get<ICountry>(url);
  }

}
