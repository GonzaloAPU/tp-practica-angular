import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inscripcion } from '../../services/inscripcion';
import { Alumno, categoriaAlumno } from '../../models/alumno';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})
export class Parte2 {
  inscripciones: Array<Alumno> = [];
  categoriaAlumno = categoriaAlumno;
  nuevoAlumno: Alumno = new Alumno('', 0, categoriaAlumno.Estudiante, '', '', '');
  
  // Para mostrar el cálculo en el formulario antes de registrar
  precioFinal: number | null = null;

  constructor(private inscripcionService: Inscripcion) {
    this.inscripciones = this.inscripcionService.getInscripciones();
  }

  // REQUISITO: Cálculo en vivo cuando cambia precio o categoría
  calcularDescuento() {
    if (this.nuevoAlumno.precio > 0 && this.nuevoAlumno.categoriaAlumno) {
      this.precioFinal = this.inscripcionService.calcularDescuento(this.nuevoAlumno);
    } else {
      this.precioFinal = null;
    }
  }

  agregar() {
    // Registramos con el precio ya calculado con descuento
    const nuevo = new Alumno(
      this.nuevoAlumno.dni,
      this.precioFinal || this.nuevoAlumno.precio,
      Number(this.nuevoAlumno.categoriaAlumno),
      this.nuevoAlumno.fechaIngreso || new Date().toISOString().slice(0, 10),
      this.nuevoAlumno.email,
      this.nuevoAlumno.curso
    );

    this.inscripcionService.agregarInscripcion(nuevo);
    this.inscripciones = this.inscripcionService.getInscripciones();
    
    // Resetear formulario y precio calculado
    this.nuevoAlumno = new Alumno('', 0, categoriaAlumno.Estudiante, '', '', '');
    this.precioFinal = null;
  }

  // REQUISITO: Funciones para el panel de resumen
  contarPorCategoria(cat: number): number {
    return this.inscripciones.filter(a => Number(a.categoriaAlumno) === cat).length;
  }

  get totalRecaudado(): number {
    return this.inscripciones.reduce((acc, a) => acc + a.precio, 0);
  }

  /*eliminar(dni: string) {
    this.inscripcionService.eliminarInscripcion(dni);
    this.inscripciones = this.inscripcionService.getInscripciones();
  }*/
}