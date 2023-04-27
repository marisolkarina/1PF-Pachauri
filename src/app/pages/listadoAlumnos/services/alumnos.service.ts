import { Injectable } from '@angular/core';
import { Alumno } from '../listadoAlumnos.component';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos$ = new BehaviorSubject<Alumno[]>([
    {
      id: 1,
      nombre: 'Juana',
      apellido: 'Sosa',
      curso: 'Aritmetica',
    },
    {
      id: 2,
      nombre: 'Rosa',
      apellido: 'Lima',
      curso: 'Historia',
    },
    {
      id: 3,
      nombre: 'Lisa',
      apellido: 'Simpson',
      curso: 'Literatura',
    }
  ])

  constructor() { }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.alumnos$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}
