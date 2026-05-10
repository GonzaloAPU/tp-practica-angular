import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root',

})
export class Inscripcion {
 

  Inscripciones: Alumno[] = [];

  getInscripciones(): Alumno[] {
    return this.Inscripciones;
  }

  agregarInscripcion(alumno: Alumno): void {
      this.Inscripciones.push(alumno);
    }

  eliminarInscripcion(dni: string): void {
      this.Inscripciones = this.Inscripciones.filter(alumno => alumno.dni !== dni);
    }

  actualizarInscripcion(dni: string, alumnoActualizado: Alumno): void {
      const index = this.Inscripciones.findIndex(alumno => alumno.dni === dni);
      if (index !== -1) {
        this.Inscripciones[index] = alumnoActualizado;
      }
  }

  calcularDescuento(Alumno:Alumno):number{
    switch(Alumno.categoriaAlumno){
      case 1: return Alumno.precio - (Alumno.precio * 0,35)
      case 2: return Alumno.precio - (Alumno.precio * 0,50)
      case 3: return Alumno.precio
      default: return 0
    }

  }

}
