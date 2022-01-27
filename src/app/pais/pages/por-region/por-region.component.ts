import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 10px;
    }
    small {
      color: #658ee6;
    }
    `
  ]
})
export class PorRegionComponent {
  
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';

  paises: Country[] = [];


  constructor( private porRegion: PaisService ){}

  getClase( region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ){
    this.regionActiva = region;

    this.porRegion.buscarRegion(region)
    .subscribe( paises => this.paises = paises );
  }
}
