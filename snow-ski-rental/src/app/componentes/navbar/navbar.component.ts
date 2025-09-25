import { Component, HostListener, Input } from '@angular/core';
import { Producto } from '../../models/Producto';
import { FormGroup } from '@angular/forms';

import { ProductoServiceService } from '../../service/producto-service.service';
import { imagenes } from '../../models/imagenes';
import { CAROUSEL_DATA_ITEMS } from '../../constante/carousel.const';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

   Formulario!: FormGroup;


  //Productos! : Producto[];
    
imagenes: imagenes[] = CAROUSEL_DATA_ITEMS;

  productos: Producto[] = [];
 
   mostrarBotonWhatsapp? = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const alturaPagina = document.documentElement.scrollHeight;
    const alturaVentana = window.innerHeight;
    const scrollActual = window.scrollY;

    // Mostrar si estamos cerca del fondo (a 150px del final por ejemplo)
    if (alturaPagina) {
      this.mostrarBotonWhatsapp = true;
    } else {
      this.mostrarBotonWhatsapp = false;
    }
  }
 

  constructor(private productosService: ProductoServiceService) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
    });

  }

    menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  closeMenu() {
    this.menuAbierto = false;
  }
}



/*
ngOnInit(): void {
  console.log('Productos cargados:', this.productos);
}
*/





