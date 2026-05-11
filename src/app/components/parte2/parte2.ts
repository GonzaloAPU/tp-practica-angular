import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inscripcion } from '../../services/inscripcion';
import { Alumno, categoriaAlumno } from '../../models/alumno';

// Herramientas para manejar la Datatable
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTablesModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})
export class Parte2 implements OnInit, AfterViewInit {

  inscripciones: Array<Alumno> = [];
  categoriaAlumno = categoriaAlumno; // Para poder usar el Enum en el HTML
  nuevoAlumno: Alumno = new Alumno('', 0, categoriaAlumno.Estudiante, '', '', '');
  
  // Variable para mostrar el precio calculado en el HTML
  precioFinal: number | null = null;

  // Variable para el truco de recarga de la tabla
  mostrarTabla: boolean = true;

  // Variables y Gatillo para la Datatable
  dtOptions: any = {};
  @ViewChild(DataTableDirective, {static: false}) dtElement!: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private inscripcionService: Inscripcion) {
    this.inscripciones = this.inscripcionService.getInscripciones();
  }

  ngOnInit(): void {
    // Configuración de la tabla (en inglés por ahora para evitar el error de red)
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
  }

  ngAfterViewInit(): void {
    // Dibuja la tabla por primera vez al cargar la vista
    this.dtTrigger.next(null);
  }

  // Llama al servicio para calcular el descuento matemático
  calcularDescuento() {
    if (this.nuevoAlumno.precio > 0 && this.nuevoAlumno.categoriaAlumno) {
      this.precioFinal = this.inscripcionService.calcularDescuento(this.nuevoAlumno);
    } else {
      this.precioFinal = null; 
    }
  }

  agregar() {
    // 1. Armamos el objeto con el precio final ya calculado
    const nuevo = new Alumno(
      this.nuevoAlumno.dni,
      this.precioFinal || this.nuevoAlumno.precio, // Usamos el precio con descuento
      Number(this.nuevoAlumno.categoriaAlumno),
      this.nuevoAlumno.fechaIngreso || new Date().toISOString().slice(0, 10),
      this.nuevoAlumno.email,
      this.nuevoAlumno.curso
    );

    // 2. Lo enviamos al servicio y actualizamos la lista local
    this.inscripcionService.agregarInscripcion(nuevo);
    this.inscripciones = this.inscripcionService.getInscripciones();
    
    // 3. Vaciamos el formulario y ocultamos el cartel
    this.nuevoAlumno = new Alumno('', 0, categoriaAlumno.Estudiante, '', '', '');
    this.precioFinal = null;

    // 4. Truco de recarga: Apagamos la tabla del HTML
    this.mostrarTabla = false;

    // Le damos 50 milisegundos a Angular para que guarde el dato, y la volvemos a prender
    setTimeout(() => {
      this.mostrarTabla = true;
      
      // Volvemos a disparar el gatillo para que Datatables lea el nuevo array
      setTimeout(() => {
        this.dtTrigger.next(null);
      }, 50);
    }, 50);
  }

  eliminar(dni: string) {
    this.inscripcionService.eliminarInscripcion(dni);
    this.inscripciones = this.inscripcionService.getInscripciones();
  }

  // --- Funciones para la sección de Resumen ---
  get totalGeneral() {
    return this.inscripciones.reduce((suma, item) => suma + item.precio, 0);
  }

  contarCategoria(cat: number) {
    return this.inscripciones.filter(item => Number(item.categoriaAlumno) === cat).length;
  }
}