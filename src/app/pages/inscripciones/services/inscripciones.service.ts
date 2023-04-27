import { Injectable } from '@angular/core';
import { Inscripcion } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

const INSCRIPCIONES_MOCKS: Inscripcion[] = [
  {
    id: 1,
    nombreCompleto: 'Juana Sosa',
    cursoInscrito: 'Geometría Analítica'
  },
  {
    id: 2,
    nombreCompleto: 'Rosa Lima',
    cursoInscrito: 'Cálculo Integral'
  },
  {
    id: 1,
    nombreCompleto: 'Lisa Simpson',
    cursoInscrito: 'Estadística y Probabilidades'
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
}
