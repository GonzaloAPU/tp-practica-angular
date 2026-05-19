import { Component,OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Crud } from '../../services/crud';

import { Alumnos } from '../../models/alumnos';

import { MatTableModule, MatTableDataSource } from '@angular/material/table'; // <-- SUMAMOS MatTableDataSource ACÁ
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule, FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})
export class Parte2 {
 alumno: Alumnos;
  total: number = 0;

  // 1. Columnas de Angular Material
  columnasIds: string[] = ['dni', 'precio', 'categoriaAlumno', 'fechaInscripcion', 'email', 'curso'];

  // 2. Origen de datos para la tabla reactiva
  dataSource = new MatTableDataSource<Alumnos>();

  // 3. Referencia del paginador
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private crud: Crud) {
    this.alumno = new Alumnos('', 0, '', new Date(), '', '');
  }

  ngOnInit(): void {
    // Al arrancar, cargamos los datos existentes
    this.actualizarTablaMaterial();
  }

  // Sincroniza los datos del servicio con la tabla de Material
  actualizarTablaMaterial() {
    this.dataSource.data = this.crud.mostrarAlumnos();
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  // Cambios controlados en el formulario
  ejecutarCalculo() {
    this.total = this.crud.calcularTotal(this.alumno);
  }

  // Buscador letra por letra de Material
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  agregarAlumno() {
    // 1. Nos aseguramos de calcular el precio final antes de guardar
    this.ejecutarCalculo();
    this.alumno.precio = this.total;

    // 2. Mandamos el registro al servicio crud
    this.crud.agregarAlumno(this.alumno);

    // 3. ¡IMPORTANTÍSIMO! Refrescamos la tabla de Material al instante
    this.actualizarTablaMaterial();

    // 4. Limpiamos el formulario para el siguiente alumno
    this.alumno = new Alumnos('', 0, '', new Date(), '', '');
    this.total = 0;
  }

  eliminarAlumno(dni: string) {
    this.crud.eliminarAlumno(dni);
    this.actualizarTablaMaterial(); // Refresca por si borrás
  }

  // Mantenemos tu función por si la llama el HTML viejo
  calcularTotal(alumno: Alumnos): number {
    this.total = this.crud.calcularTotal(alumno);
    return this.total;
  }
}
