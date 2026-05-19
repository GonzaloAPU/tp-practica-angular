export class Alumnos {
  dni: string;
  precio: number;
  categoriaAlumno: string;
  fechaInscripcion: Date;
  email: string;
  curso: string;

  constructor(dni: string, precio: number, categoriaAlumno: string, fechaInscripcion: Date, email: string, curso: string) {
    this.dni = dni;
    this.precio = precio;
    this.categoriaAlumno = categoriaAlumno;
    this.fechaInscripcion = fechaInscripcion;
    this.email = email;
    this.curso = curso;

  }
}
