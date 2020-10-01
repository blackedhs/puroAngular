import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalJumbotronComponent } from './componentes/principal-jumbotron/principal-jumbotron.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: '' , component: PrincipalComponent},
  {path: 'botron' , component: PrincipalJumbotronComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
