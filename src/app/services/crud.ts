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



  calcularporcategoria() {
    let egresados = 0;
    let estudiantes = 0;
    let particulares = 0;

    this.alumnos.forEach(alumno => {
      switch (alumno.categoriaAlumno) {
        case 'egresado':
          egresados++;
          break;
        case 'estudiante':
          estudiantes++;
          break;
        case 'particular':
          particulares++;
          break;
      }
    });
    return { totalEgresados: egresados, totalEstudiantes: estudiantes, totalParticulares: particulares };
  }
}
