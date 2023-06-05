import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
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

  obtenerUsuarios(): void {

    this.httpClient.get<Usuario[]>(`${environment.apiBaseUrl}/usuarios`)
    .subscribe({
      next: (usuarios) => {
        this.usuarios$.next(usuarios);
      }
    })
  }

  eliminarUsuario(usuarioId: number): Observable<Usuario[]> {
    this.usuarios$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (usuarios) => {
        const usuariosActualizados = usuarios.filter((usuario) => usuario.id !== usuarioId)
        this.usuarios$.next(usuariosActualizados);
      },
      complete: () => {},
      error: () => {}
    });

    return this.usuarios$.asObservable();
  }

  editarUsuario(usuarioId: number, actualizacion: Partial<Usuario>): Observable<Usuario[]> {
    this.usuarios$
      .pipe(
        take(1),
      )

      .subscribe({
        next: (usuarios) => {

          const usuariosActualizados = usuarios.map((usuario) => {
            if (usuario.id === usuarioId) {
              return {
                ...usuario,
                ...actualizacion,
              }
            } else {
              return usuario;
            }
          })

          this.usuarios$.next(usuariosActualizados);
        },
        complete: () => {},
        error: () => {}
      });

    return this.usuarios$.asObservable();
  }

}
