import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {

  grilla = [{ img: 'jpg1', descripcion: 'descripcion1', tipo: 'barco', active: false, resuelta: false },
  { img: 'jpg2', descripcion: 'descripcion2', tipo: 'avion', active: false, resuelta: false },
  { img: 'jpg3', descripcion: 'descripcion3', tipo: 'auto', active: false, resuelta: false },
  { img: 'jpg4', descripcion: 'descripcion4', tipo: 'barco', active: false, resuelta: false },
  { img: 'jpg5', descripcion: 'descripcion5', tipo: 'avion', active: false, resuelta: false },
  { img: 'jpg6', descripcion: 'descripcion6', tipo: 'auto', active: false, resuelta: false },
  { img: 'jpg7', descripcion: 'descripcion7', tipo: 'gato', active: false, resuelta: false },
  { img: 'jpg8', descripcion: 'descripcion8', tipo: 'perro', active: false, resuelta: false },
  { img: 'jpg9', descripcion: 'descripcion9', tipo: 'raton', active: false, resuelta: false },
  { img: 'jpg7', descripcion: 'descripcion7', tipo: 'gato', active: false, resuelta: false },
  { img: 'jpg8', descripcion: 'descripcion8', tipo: 'perro', active: false, resuelta: false },
  { img: 'jpg9', descripcion: 'descripcion9', tipo: 'raton', active: false, resuelta: false }]

  tarjetasSeleccionadas: any[] = [];
  juegoIniciado: boolean = false;
  intentos: number = 0;

  iniciarJuego() {
    this.mesclarGrilla()
    this.intentos = 3;
    this.juegoIniciado = true;
  }

  mesclarGrilla() {
    this.grilla.sort(() => Math.random() - 0.5);
    this.grilla.forEach(item => {
      item.active = false
      item.resuelta = false
      });
      this.tarjetasSeleccionadas = [];
  }

  voltearTarjeta(item: any) {

    if (!this.juegoIniciado || item.active || item.resuelta || this.tarjetasSeleccionadas.length === 2) {
      return;
    }
    item.active = true;
    this.tarjetasSeleccionadas.push(item);

    if (this.tarjetasSeleccionadas.length === 2) {
      if (this.tarjetasSeleccionadas[0].tipo === this.tarjetasSeleccionadas[1].tipo) {
        this.tarjetasSeleccionadas[0].resuelta = true;
        this.tarjetasSeleccionadas[1].resuelta = true;
        this.tarjetasSeleccionadas = [];
      } else{
        this.intentos--;
        setTimeout(() => {
          this.tarjetasSeleccionadas[0].active = false;
          this.tarjetasSeleccionadas[1].active = false;
          this.tarjetasSeleccionadas = [];
        }, 1000);
      }
    }
  }






}
