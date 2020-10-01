import { TransformVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Output() detalle: EventEmitter<Persona> = new EventEmitter();
  @Output() borrar: EventEmitter<Persona> = new EventEmitter();
  @Output() modificacion: EventEmitter<Persona> = new EventEmitter();
  @Input() personas: [Persona];
  public flag = true;
  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }
  onCambiarVista(): void{
    this.flag = !this.flag;
    console.log(this.personas);
  }
  onDetalle(persona: Persona): any{
    this.detalle.emit(persona);
  }
  onModificacion(persona: Persona): any{
    this.modificacion.emit(persona);
  }
  onBorrar(persona: Persona): any{
    this.borrar.emit(persona);
  }
}
