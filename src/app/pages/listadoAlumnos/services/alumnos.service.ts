import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { Alumno, CrearAlumnoPayload } from '../models';

const ALUMNOS_MOCKS: Alumno[] = [
  {
    id: 1,
    nombre: 'Juana',
    apellido: 'Sosa',
    fecha_registro: new Date(),
  },
  {
    id: 2,
    nombre: 'Rosa',
    apellido: 'Lima',
    fecha_registro: new Date(),
  },
  {
    id: 3,
    nombre: 'Lisa',
    apellido: 'Simpson',
    fecha_registro: new Date(),
  }
]

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos$ = new BehaviorSubject<Alumno[]>([])

  constructor() { }

  obtenerAlumnos(): Observable<Alumno[]> {
    this.alumnos$.next(ALUMNOS_MOCKS);
    return this.alumnos$.asObservable();
  }

  crearAlumno(payload: CrearAlumnoPayload): Observable<Alumno[]> {
    this.alumnos$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (alumnos) => {
        this.alumnos$.next([
          ...alumnos,
          {
            id: alumnos.length + 1,
            ...payload
          },
        ])
      }
    })
    return this.alumnos$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.alumnos$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}
