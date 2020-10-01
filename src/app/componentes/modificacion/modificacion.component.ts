import { Component, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { ApiService } from 'src/app/servicios/api.service';
import { PrincipalJumbotronComponent } from '../principal-jumbotron/principal-jumbotron.component';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.css']
})
export class ModificacionComponent implements OnInit {

  @Input() persona: Persona;
  constructor(public modificar: PrincipalJumbotronComponent, public api: ApiService) { }

  ngOnInit(): void {
  }
  onCancelar(): void{
    this.modificar.modificarFlag = false;
  }
  onModificar(): void{
    console.log(this.persona);
    this.api.dbUpdate(this.persona);
    this.modificar.modificarFlag = false;
  }
}
