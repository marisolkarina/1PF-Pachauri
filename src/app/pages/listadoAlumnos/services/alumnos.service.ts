import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { Alumno, CrearAlumnoPayload } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envoronments';

// const ALUMNOS_MOCKS: Alumno[] = [
//   {
//     id: 1,
//     nombre: 'Juana',
//     apellido: 'Sosa',
//     fecha_registro: new Date(),
//   },
//   {
//     id: 2,
//     nombre: 'Rosa',
//     apellido: 'Lima',
//     fecha_registro: new Date(),
//   },
//   {
//     id: 3,
//     nombre: 'Lisa',
//     apellido: 'Simpson',
//     fecha_registro: new Date(),
//   }
// ]

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos$ = new BehaviorSubject<Alumno[]>([])

  constructor(
    private httpClient: HttpClient
  ) { }

  get alumnos(): Observable<Alumno[]>{
    return this.alumnos$.asObservable();
  }

  obtenerAlumnos(): void {
    // this.alumnos$.next(ALUMNOS_MOCKS);
    // return this.alumnos$.asObservable();
    this.httpClient.get<Alumno[]>(`${environment.apiBaseUrl}/alumnos`)
    .subscribe({
      next: (alumnos) => {
        this.alumnos$.next(alumnos);
      }
    })
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

  eliminarAlumno(alumnoId: number): Observable<Alumno[]> {
    this.alumnos$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (alumnos) => {
        const alumnosActualizados = alumnos.filter((alumno) => alumno.id !== alumnoId)
        this.alumnos$.next(alumnosActualizados);
      },
      complete: () => {},
      error: () => {}
    });

    return this.alumnos$.asObservable();
  }
}
