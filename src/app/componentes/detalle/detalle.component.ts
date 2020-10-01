import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { PrincipalJumbotronComponent } from '../principal-jumbotron/principal-jumbotron.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() persona: Persona;
  constructor(public detalle: PrincipalJumbotronComponent) { }

  ngOnInit(): void {
  }
  onLimpiar(): void{
    this.detalle.detalleFlag = false;
  }

}
