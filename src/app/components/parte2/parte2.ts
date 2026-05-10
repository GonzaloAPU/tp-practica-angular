import { Component } from '@angular/core';
import { Inscripcion } from '../../services/inscripcion';
import { Alumno,categoriaAlumno } from '../../models/alumno';

@Component({
  selector: 'app-parte2',
  imports: [],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})

export class Parte2 {

  inscripciones: Array<Alumno>;

  constructor(private inscripcionService: Inscripcion){
    this.inscripciones=this.inscripcionService.getInscripciones();

  }

  agregar(dni:string,precio:number,categoriaAlumno:categoriaAlumno,fechaIngreso:string,email:string,curso:string){
    const nuevo = new Alumno(dni,precio,categoriaAlumno,fechaIngreso,email,curso);
    this.inscripcionService.agregarInscripcion(nuevo);
    this.inscripciones=this.inscripcionService.getInscripciones();
  }

  eliminar(){
    this.inscripcionService.eliminarInscripcion
    this.inscripciones=this.inscripcionService.getInscripciones();
  }

  traer(){
    this.inscripcionService.getInscripciones
  }
  
}
