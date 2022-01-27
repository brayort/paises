import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private rutaActual: ActivatedRoute,
    private PaisService: PaisService

    ){ }

  ngOnInit(): void {

    this.rutaActual.params
    .pipe(
      switchMap( ( { id }) => this.PaisService.detallesPais( id )),
      tap( console.log )
    )
      .subscribe( pais => this.pais = pais);
  }

}
