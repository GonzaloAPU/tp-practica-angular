import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {

  grilla = [{img:'jpg1', descripcion:'descripcion1', tipo:'barco', active:false},
            {img:'jpg2', descripcion:'descripcion2', tipo:'avion', active:false},
            {img:'jpg3', descripcion:'descripcion3', tipo:'auto', active:false},
            {img:'jpg4', descripcion:'descripcion4', tipo:'barco', active:false},
            {img:'jpg5', descripcion:'descripcion5', tipo:'avion', active:false},
            {img:'jpg6', descripcion:'descripcion6', tipo:'auto', active:false},
            {img:'jpg7', descripcion:'descripcion7', tipo:'gato', active:false},
            {img:'jpg8', descripcion:'descripcion8', tipo:'perro', active:false},
            {img:'jpg9', descripcion:'descripcion9', tipo:'raton', active:false},
            {img:'jpg7', descripcion:'descripcion7', tipo:'gato', active:false},
            {img:'jpg8', descripcion:'descripcion8', tipo:'perro', active:false},
            {img:'jpg9', descripcion:'descripcion9', tipo:'raton', active:false}]

  mesclarGrilla() {
    this.grilla.sort(() => Math.random() - 0.5);
    this.grilla.forEach(item => item.active = false);
    }
  intentos: number = 0;

  iniciarJuego() {
    this.mesclarGrilla()



    }
  }

