
export enum categoriaAlumno{
    Estudiante=1,
    Egresado=2,
    Particular=3
}

export class Alumno {

dni:string;
precio:number;
categoriaAlumno:categoriaAlumno;
fechaIngreso:string;
email:string;
curso:string;
   
constructor(dni:string,precio:number,categoriaAlumno:categoriaAlumno,fechaIngreso:string,email:string,curso:string){
    this.dni=dni;
    this.precio=precio;
    this.fechaIngreso=fechaIngreso;
    this.email=email;
    this.curso=curso
    this.categoriaAlumno=categoriaAlumno;
}

}
