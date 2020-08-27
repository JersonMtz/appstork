import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContribuyeComponent } from './contribuye/contribuye.component';
import { PymeComponent } from './pyme/pyme.component';
import { ListaCatalogoComponent } from './catalogo/lista-catalogo/lista-catalogo.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'contribuye', component:ContribuyeComponent},
  { path:'catalogo', component:CatalogoComponent},
  { path:'catalogo/restaurantes/java-coffee', component:PymeComponent},
  { path:'catalogo/servicios', component:ListaCatalogoComponent},
  { path:'acerca', component:AcercaComponent},
  { path:'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
