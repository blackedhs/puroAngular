import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesBanderaComponent } from './componentes/paises-bandera/paises-bandera.component';
import { RegionesComponent } from './componentes/regiones/regiones.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PrincipalJumbotronComponent } from './componentes/principal-jumbotron/principal-jumbotron.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ModificacionComponent } from './componentes/modificacion/modificacion.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PaisesBanderaComponent,
    RegionesComponent,
    PrincipalComponent,
    PrincipalJumbotronComponent,
    ListadoComponent,
    BorrarComponent,
    DetalleComponent,
    ModificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
