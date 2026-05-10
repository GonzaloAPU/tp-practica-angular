import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inscripcion } from '../../services/inscripcion';
import { Alumno, categoriaAlumno } from '../../models/alumno';

@Component({
  selector: 'app-parte2',
  imports: [CommonModule, FormsModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})

export class Parte2 {

  inscripciones: Array<Alumno> = [];
  categoriaAlumno = categoriaAlumno;
  nuevoAlumno: Alumno = new Alumno('', 0, categoriaAlumno.Estudiante, '', '', '');

  constructor(private inscripcionService: Inscripcion) {
    this.inscripciones = this.inscripcionService.getInscripciones();
  }

  agregar() {
    const nuevo = new Alumno(
      this.nuevoAlumno.dni,
      this.nuevoAlumno.precio,
      this.nuevoAlumno.categoriaAlumno,
      this.nuevoAlumno.fechaIngreso || new Date().toISOString().slice(0, 10),
      this.nuevoAlumno.email,
      this.nuevoAlumno.curso
    );

    this.inscripcionService.agregarInscripcion(nuevo);
    this.inscripciones = this.inscripcionService.getInscripciones();
    this.nuevoAlumno = new Alumno('', 0, categoriaAlumno.Estudiante, '', '', '');
  }

  eliminar(dni: string) {
    this.inscripcionService.eliminarInscripcion(dni);
    this.inscripciones = this.inscripcionService.getInscripciones();
  }

  traer() {
    this.inscripciones = this.inscripcionService.getInscripciones();
  }
}
