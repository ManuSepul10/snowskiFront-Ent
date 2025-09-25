import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { NavbarComponent } from './componentes/navbar/navbar.component';

import { ReservaComponent } from './componentes/reserva/reserva.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ComofuncionaComponent } from './componentes/comofunciona/comofunciona.component';
import { AccionComponent } from './componentes/accion/accion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarruselprincipalComponent } from './carruselprincipal/carruselprincipal.component';

const routes: Routes = [
  {path : '' , component: NavbarComponent},
  {path:'',component:CarruselprincipalComponent},
  {path:'',component:ProductosComponent},
  {path:'',component:ExperienciaComponent},
  {path:'',component:ComofuncionaComponent},
  {path:'',component:AccionComponent},
  {path:'',component:FooterComponent}
  //{path: 'carrito', component: CarritoComponent },
  //{path:'indumentaria',component:IndumentariaComponent}
 // {path:'reserva',component:ReservaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
