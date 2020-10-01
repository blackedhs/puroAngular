import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-principal-jumbotron',
  templateUrl: './principal-jumbotron.component.html',
  styleUrls: ['./principal-jumbotron.component.css']
})
export class PrincipalJumbotronComponent implements OnInit {
  public personas: Persona[];
  public personaModificar: Persona;
  public personaBorrar: Persona;
  public personaDetalle: Persona;
  public modificarFlag = false;
  public borrarFlag = false;
  public detalleFlag = false;
  public sinDatos = false;
  constructor(public api: ApiService) { }

  async ngOnInit(): Promise<any> {
    this.cargaFireDb();
    // this.guardarMockyfire();
    // this.cagarFire();

  }
  cargaFireDb(): any {
    this.api.dbGet('personas').snapshotChanges().subscribe(item => {
      this.personas = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x["$key"] = element.key;
        this.personas.push(x as Persona);
      });
    }, error => console.log(error));
  }
  async guardarMockyfire(): Promise<any> {
    await this.api.consumirMock().subscribe(datos => this.personas = datos,
      () => console.log('error en consumir mock'));
    setTimeout(() => {
      this.personas.forEach(dato =>
        this.api.dbInsert(dato));
    }, 2000);
  }
  onDetalle(persona: Persona): any {
    this.modificarFlag = false;
    this.borrarFlag = false;
    this.detalleFlag = true;
    this.personaDetalle = persona;
  }
  onModificacion(persona: Persona): any {
    this.borrarFlag = false;
    this.detalleFlag = false;
    this.modificarFlag = true;
    this.personaModificar = persona;
  }
  onBorrar(persona: Persona): any {
    this.detalleFlag = false;
    this.modificarFlag = false;
    this.borrarFlag = true;
    this.personaBorrar = persona;
  }
}
