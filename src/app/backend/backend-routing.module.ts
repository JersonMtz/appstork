import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MypymeComponent } from './mypyme/mypyme.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  { path:'dashboard', component: PerfilComponent },
  { path:'dashboard/mipyme', component: MypymeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
