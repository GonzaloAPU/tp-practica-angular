import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({

  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {
  productos = [
    { nombre: 'Camiseta', descripcion: 'Camiseta de algodón con diseño moderno', img: 'img/camiseta.jpg', precio: 19.99 },
    { nombre: 'Pantalones', descripcion: 'Pantalones de mezclilla cómodos y duraderos', img: 'img/pantalones.jpg', precio: 29.99 },
    { nombre: 'Zapatos', descripcion: 'Zapatos deportivos para todas las actividades', img: 'img/zapatos.jpg', precio: 39.99 },
    { nombre: 'Chaqueta', descripcion: 'Chaqueta impermeable para protegerte de la lluvia', img: 'img/chaqueta.jpg', precio: 49.99 },
    { nombre: 'Gorra', descripcion: 'Gorra de béisbol con diseño clásico', img: 'img/gorra.jpg', precio: 9.99 },
    { nombre: 'Mochila', descripcion: 'Mochila resistente con múltiples compartimentos', img: 'img/mochila.jpg', precio: 34.99 },
  ]

  carrito: any[] = [];



  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
  }

  mostrarCarrito() {
    return this.carrito;
  }

  totalCarrito() {
    const total = this.carrito.reduce((total, producto) => total + producto.precio, 0);
    return total.toFixed(2);
  }

  mostrar: boolean = false;

}
