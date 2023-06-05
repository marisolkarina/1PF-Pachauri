import { Injectable } from '@angular/core';
import { CrearInscripcionPayload, Inscripcion } from '../models';
import { BehaviorSubject, Observable, take } from 'rxjs';

const INSCRIPCIONES_MOCKS: Inscripcion[] = [
  {
    id: 1,
    nombre: 'Juana',
    apellido: 'Sosa',
    cursoInscrito: 'Geometría Analítica'
  },
  {
    id: 2,
    nombre: 'Juana',
    apellido: 'Sosa',
    cursoInscrito: 'Álgebra Lineal'
  },
  {
    id: 3,
    nombre: 'Rosa',
    apellido: 'Lima',
    cursoInscrito: 'Cálculo Integral'
  },
  {
    id: 4,
    nombre: 'Rosa',
    apellido: 'Lima',
    cursoInscrito: 'Desarrollo Adaptativo de Software'
  },
  {
    id: 5,
    nombre: 'Lisa',
    apellido: 'Simpson',
    cursoInscrito: 'Estadística y Probabilidades'
  },
  {
    id: 6,
    nombre: 'Lisa',
    apellido: 'Simpson',
    cursoInscrito: 'Arquitectura Empresarial'
  },
]

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  private inscripciones$ = new BehaviorSubject<Inscripcion[]>([])

  constructor() { }

  obtenerInscripciones(): Observable<Inscripcion[]> {
    this.inscripciones$.next(INSCRIPCIONES_MOCKS);
    return this.inscripciones$.asObservable();
  }

  crearInscripcion(payload: CrearInscripcionPayload): Observable<Inscripcion[]> {
    this.inscripciones$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (inscripciones) => {
        this.inscripciones$.next([
          ...inscripciones,
          {
            id: inscripciones.length + 1,
            ...payload
          },
        ])
      }
    })
    return this.inscripciones$.asObservable();
  }

  eliminarInscripcion(inscripcionId: number): Observable<Inscripcion[]> {
    this.inscripciones$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (inscripciones) => {
        const alumnosActualizados = inscripciones.filter((inscripcion) => inscripcion.id !== inscripcionId)
        this.inscripciones$.next(alumnosActualizados);
      },
      complete: () => {},
      error: () => {}
    });

    return this.inscripciones$.asObservable();
  }

}
