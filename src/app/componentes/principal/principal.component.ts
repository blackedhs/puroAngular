import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public paises;
  constructor(public miApi: ApiService) { }

  ngOnInit(): void {
  }
  actualizaRegion(region: string): void {
    console.log(region);
    this.miApi.consumir(region)
      .subscribe(datos => this.paises = datos
        , error => console.log(error));
  }
  onGuardar(nombre: string): void {
    alert('El pais ' + nombre + ' se guardo con exito');
  }
  onDetalle(pais: any): void {
    alert('Pais: ' + pais.name + ' Region: ' + pais.region);
  }
}
