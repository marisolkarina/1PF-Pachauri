import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos$ = new BehaviorSubject<Curso[]>([

  ])
  
  constructor() { }

  // obtenerCursos(): Observable<Curso[]> {

  // }
}
