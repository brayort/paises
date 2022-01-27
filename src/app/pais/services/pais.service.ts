import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiurl: string = 'https://restcountries.com/v2';


  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]> {

    const url = `${ this.apiurl }/name/${ termino }`;

    return this.http.get<Country[]>(url);
  }

  buscarCapital( termino: string ): Observable<Country[]> {

    const url = `${ this.apiurl }/capital/${ termino }`;

    return this.http.get<Country[]>(url);

  }

  detallesPais( termino: string ): Observable<Country> {

    const url = `${ this.apiurl }/alpha/${ termino }`;

    return this.http.get<Country>(url);

  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiurl }/region/${ region }`;

    return this.http.get<Country[]>(url);
  }
  
}
