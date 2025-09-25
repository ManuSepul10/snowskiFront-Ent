import { Component, Input } from '@angular/core';
import { Producto } from '../../models/Producto';
import { ProductoServiceService } from '../../service/producto-service.service';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() productos: Producto[] = [];
 
}
