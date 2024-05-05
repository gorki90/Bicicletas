import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PaisesComponent } from './paises/paises.component';
import { RegistroComponent } from './registro/registro.component';
import { MapaComponent } from './mapa/mapa.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
    { path: '', component:InicioComponent},
    { path: 'mapa', component:MapaComponent},
    { path: 'contacto', component:ContactoComponent},
    { path: 'paises', component:PaisesComponent},
    { path: 'registro', component:RegistroComponent},
    { path: 'perfil', component:PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
