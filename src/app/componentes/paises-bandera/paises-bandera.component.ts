import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paises-bandera',
  templateUrl: './paises-bandera.component.html',
  styleUrls: ['./paises-bandera.component.css']
})
export class PaisesBanderaComponent implements OnInit {

  @Input() pais;
  @Output() paisGuardado: EventEmitter<string> = new EventEmitter();
  @Output() paisDetalle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onGuardar(nombre: string): any{
     this.paisGuardado.emit(nombre);
  }
  onDetalle(pais: any): any{
     this.paisDetalle.emit(pais);
  }
}
