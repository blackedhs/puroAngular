import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { ApiService } from 'src/app/servicios/api.service';
import { PrincipalJumbotronComponent } from '../principal-jumbotron/principal-jumbotron.component';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  @Input() persona: Persona;
  constructor(public api: ApiService, public borrar: PrincipalJumbotronComponent) { }

  ngOnInit(): void {
  }
  onBorrar(): void {
    this.api.dbDelete(this.persona.$key);
    this.borrar.borrarFlag = false;
  }
  onCancelar(): void {
    this.borrar.borrarFlag = false;
  }
}
