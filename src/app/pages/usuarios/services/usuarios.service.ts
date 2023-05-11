import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Usuario } from 'src/app/models';
import { environment } from 'src/environments/envoronments';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios$ = new BehaviorSubject<Usuario[]>([])

  constructor(
    private httpClient: HttpClient
  ) { }

  get usuarios(): Observable<Usuario[]>{
    return this.usuarios$.asObservable();
  }

  obtenerAlumnos(): void {

    this.httpClient.get<Usuario[]>(`${environment.apiBaseUrl}/alumnos`)
    .subscribe({
      next: (usuarios) => {
        this.usuarios$.next(usuarios);
      }
    })
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario | undefined> {
    return this.usuarios$.asObservable()
      .pipe(
        map((usuarios) => usuarios.find((u) => u.id === id))
      )
  }


}
