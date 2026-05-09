import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})

export class Punto1 {
  eventos = [
    { nombre: 'taller de yoga', descripcion: 'clases de relajacion y meditacion al aire libre', img: 'evento01.jpg' },
    { nombre: 'workshop de programación', descripcion: 'clases de programación y desarrollo de software', img: 'evento02.jpg' },
    { nombre: 'seminario de marketing', descripcion: 'clases de marketing y ventas', img: 'evento03.jpg' },
  ];
    indice = 0;

    siguiente() {

      if (this.indice == this.eventos.length)  {
        this.indice = 0; // Reinicia el índice a 0 para mostrar el primer evento
      } else {
        this.indice++; // Incrementa el índice para mostrar el siguiente evento
      }
    }

    anterior() {

      if (this.indice == -1) {
        this.indice = this.eventos.length - 1; // Establece el índice al último evento
      } else {
        this.indice--; // Decrementa el índice para mostrar el evento anterior
      }
    }


    /*siguiente() {
      this.indice = (this.indice + 1) % this.eventos.length;
    }

    anterior() {
    this.indice = (this.indice - 1 + this.eventos.length) % this.eventos.length;
  }*/
}



