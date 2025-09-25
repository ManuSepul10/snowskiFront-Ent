import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { ProductosComponent } from './componentes/productos/productos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ComofuncionaComponent } from './componentes/comofunciona/comofunciona.component';
import { AccionComponent } from './componentes/accion/accion.component';
import { AppScrollRevealDirective } from './directives/app-scroll-reveal.directive';
import { CarruselprincipalComponent } from './carruselprincipal/carruselprincipal.component';
// o donde esté ubicada


@NgModule({
  declarations: [
   AppComponent,
    NavbarComponent,
    CarruselprincipalComponent,
     ProductosComponent,
     ExperienciaComponent,
      ComofuncionaComponent,
      AccionComponent,
     FooterComponent,
     AppScrollRevealDirective,
    
    
     
     
    
    
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }