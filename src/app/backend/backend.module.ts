import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BackendRoutingModule } from './backend-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { PerfilComponent } from './perfil/perfil.component';
import { from } from 'rxjs';
import { MypymeComponent } from './mypyme/mypyme.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PrincipalComponent } from './principal/principal.component';
import { MypymeHeaderComponent } from './mypyme/mypyme-header/mypyme-header.component';


@NgModule({
  declarations: [DashboardComponent, PerfilComponent, MypymeComponent, FavoritosComponent, PrincipalComponent, MypymeHeaderComponent],
  imports: [
    MaterialModule,
    CommonModule,
    BackendRoutingModule,
    FormsModule
  ]
})
export class BackendModule { }
