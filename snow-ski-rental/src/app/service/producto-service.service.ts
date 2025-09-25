import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

 private productos: Producto[] = [
    {
      id: 1,
      nombre: 'TABLA SNOW + ( Casco y antiparras )',
      imagenUrl: 'assets/img/indumentaria/tablasnow.jpg.jpg',
      precio: 25000
    },
    {
      id: 2,
      nombre: 'ENTERITO BOTAS GUANTES (Niño)',
      imagenUrl: 'assets/img/indumentaria/nino.png',
      precio: 18000
    },
    {
      id: 3,
      nombre: 'TRINEO AZUL',
      imagenUrl: 'assets/img/indumentaria/trineoazul.jpg.png',
      precio: 12000
    },
    {
      id:4,
      nombre:'TRINEO CHICO',
      imagenUrl:'assets/img/indumentaria/trineochico.png',
      precio:8000
    },
     {
      id:5,
      nombre:'Sky +( Botas - Bastones )',
      imagenUrl:'assets/img/indumentaria/botasski2.jpg.jpg',
      precio: 25000
    },
     {
      id:6,
      nombre:'CADENAS - AUTO',
      imagenUrl:'assets/img/indumentaria/cadenas.jpg.jpg',
      precio: 10000
    },
     {
      id:7,
      nombre:'ENTERITO BOTAS GUANTES (Adulto)',
      imagenUrl:'assets/img/indumentaria/personas.png',
      precio:25000
    },
    {
      id:8,
      nombre:'TRINEO DOBLE',
      imagenUrl:'assets/img/indumentaria/bandeja.png',
      precio:15000
    }
  ];

  getProductos(): Observable<Producto[]> {
    return of(this.productos);
  }
}
