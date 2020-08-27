import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaterialModule } from '../material.module';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContribuyeComponent } from './contribuye/contribuye.component';
import { PymeComponent } from './pyme/pyme.component';
import { ListaCatalogoComponent } from './catalogo/lista-catalogo/lista-catalogo.component';


@NgModule({
  declarations: [IndexComponent, InicioComponent, MenuMobileComponent, AcercaComponent, ContactoComponent, CatalogoComponent, ContribuyeComponent, PymeComponent, ListaCatalogoComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
