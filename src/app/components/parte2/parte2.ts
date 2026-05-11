import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inscripcion } from '../../services/inscripcion';
import { Alumno, categoriaAlumno } from '../../models/alumno';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-parte2',
  imports: [CommonModule, FormsModule, DataTablesModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})

export class Parte2 {

  inscripciones: Array<Alumno> = [];
  categoriaAlumno = categoriaAlumno;
  nuevoAlumno: Alumno = new Alumno('', 0, categoriaAlumno.Estudiante, '', '', '');
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers', // Muestra todos los numeritos de paginación
      pageLength: 5, // Muestra de a 5 filas
      language: {
        // Esto traduce mágicamente el buscador y los botones al español
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json' 
      }}}


  constructor(private inscripcionService: Inscripcion, private tabla: DataTablesModule) {
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
