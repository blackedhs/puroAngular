import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {
  public region = 'Europa';
  @Output() regionSeleccionada: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.regionSeleccionada.emit('Europe');
  }
  onClick(seleccion: string): void {
    this.region = seleccion;
    this.regionSeleccionada.emit(seleccion);
  }
}
