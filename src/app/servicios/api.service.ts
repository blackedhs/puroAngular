import { importType } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Persona } from '../clases/persona';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  listado: AngularFireList<any>;
  constructor(public api: HttpClient, public db: AngularFirestore , public database: AngularFireDatabase) {}

  consumir(region: string): Observable<any> {
    const http = 'https://restcountries.eu/rest/v2/region/' + region;
    return this.api.get(http);
  }
  consumirMock(): Observable<any> {
    const http = 'https://my.api.mockaroo.com/persona.json?key=a90b84e0';
    return this.api.get(http);
  }
  mockBorrar(dato: any): any {
  }
  fireConsumir(coleccion: string): Observable<any>{
    return this.db.collection(coleccion).get();
  }
  dbGet(coleccion: string): AngularFireList<any>{
    return this.listado = this.database.list(coleccion);
  }
  dbInsert(dato: object): void{
    this.listado.push(dato);
  }
  dbUpdate(dato: object): void{
    this.listado.update(dato["$key"], {
      id: dato['id'],
      nombre: dato["nombre"],
      apellido: dato['apellido'],
      email: dato['email'],
      foto: dato['foto']
    });
  }
  dbDelete($key: string): void{
    this.listado.remove($key);
  }
  fireGuardar(coleccion: string, dato: any): Promise<any>{
    return this.db.collection(coleccion).add({dato});
  }
}
