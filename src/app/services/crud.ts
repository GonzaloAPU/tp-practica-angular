import { Injectable } from '@angular/core';

import {Alumnos} from '../models/alumnos';


@Injectable({
  providedIn: 'root'
})
export class Crud {
  private alumnos: Alumnos[] = [];

  constructor() {}

  agregarAlumno(alumno: Alumnos) {
    this.alumnos.push(alumno);
  }

  eliminarAlumno(dni: string) {
    this.alumnos = this.alumnos.filter( function (alumno)  {return alumno.dni !== dni;});
  }

  modificarAlumno(dni: string, alumnoModificado: Alumnos) {
    const index = this.alumnos.findIndex(alumno => alumno.dni === dni);
    if (index !== -1) {
      this.alumnos[index] = alumnoModificado;
    }
  }

  calcularTotal(alumno: Alumnos): number {
    switch (alumno.categoriaAlumno) {
      case 'estudiante':
        return alumno.precio * 0.65;
      case 'egresado':
        return alumno.precio * 0.85;
      default:
        return alumno.precio;
    }
  }

  mostrarAlumnos(): Alumnos[] {
    return this.alumnos;
  }
}
