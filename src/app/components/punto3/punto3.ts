import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {

  grilla = [{ img: '../../../assets/img/barco.jpeg', descripcion: 'descripcion1', tipo: 'barco', active: false, resuelta: false },
  { img: '../../../assets/img/avion.jpeg', descripcion: 'descripcion2', tipo: 'avion', active: false, resuelta: false },
  { img: '../../../assets/img/auto.jpeg', descripcion: 'descripcion3', tipo: 'auto', active: false, resuelta: false },
  { img: '../../../assets/img/barco.jpeg', descripcion: 'descripcion4', tipo: 'barco', active: false, resuelta: false },
  { img: '../../../assets/img/avion.jpeg', descripcion: 'descripcion5', tipo: 'avion', active: false, resuelta: false },
  { img: '../../../assets/img/auto.jpeg', descripcion: 'descripcion6', tipo: 'auto', active: false, resuelta: false },
  { img: '../../../assets/img/gato.jpeg', descripcion: 'descripcion7', tipo: 'gato', active: false, resuelta: false },
  { img: '../../../assets/img/perro.jpeg', descripcion: 'descripcion8', tipo: 'perro', active: false, resuelta: false },
  { img: '../../../assets/img/raton.jpeg', descripcion: 'descripcion9', tipo: 'raton', active: false, resuelta: false },
  { img: '../../../assets/img/gato.jpeg', descripcion: 'descripcion7', tipo: 'gato', active: false, resuelta: false },
  { img: '../../../assets/img/perro.jpeg', descripcion: 'descripcion8', tipo: 'perro', active: false, resuelta: false },
  { img: '../../../assets/img/raton.jpeg', descripcion: 'descripcion9', tipo: 'raton', active: false, resuelta: false }]

  tarjetasSeleccionadas: any[] = [];
  juegoIniciado: boolean = false;
  intentos: number = 0;
  victoria: boolean = false;
  tapa = '../../../assets/img/pregunta.jpg';

  iniciarJuego() {
    this.mesclarGrilla()
    this.intentos = 5;
    this.juegoIniciado = true;
  }

  mesclarGrilla() {
    this.grilla.sort(() => Math.random() - 0.5);
    this.grilla.forEach(item => {
      item.active = false
      item.resuelta = false
      });
      this.tarjetasSeleccionadas = [];
      this.intentos = 0;
      this.juegoIniciado = false;
      this.victoria = false;
  }

  voltearTarjeta(item: any) {

    if (!this.juegoIniciado || item.active || item.resuelta || this.tarjetasSeleccionadas.length === 2 || this.victoria) {
      return;
    }
    item.active = true;
    this.tarjetasSeleccionadas.push(item);

    if (this.tarjetasSeleccionadas.length === 2) {
      if (this.tarjetasSeleccionadas[0].tipo === this.tarjetasSeleccionadas[1].tipo) {
        this.tarjetasSeleccionadas[0].resuelta = true;
        this.tarjetasSeleccionadas[1].resuelta = true;
        this.tarjetasSeleccionadas = [];
        this.verificarVictoria();
      } else{
        this.intentos--;
        setTimeout(() => {
          this.tarjetasSeleccionadas[0].active = false;
          this.tarjetasSeleccionadas[1].active = false;
          this.tarjetasSeleccionadas = [];
        }, 1000);
        if(this.intentos === 0){
          alert('Juego terminado. Has perdido.');
          this.mesclarGrilla();
        }
      }
    }


    }

    verificarVictoria(){
      this.victoria = this.grilla.every(item => item.resuelta);
  }






}
