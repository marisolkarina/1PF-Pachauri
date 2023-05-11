import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, map, of } from 'rxjs';
import { Usuario } from '../models';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/envoronments';

export interface LoginFormValue {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUser$ = new BehaviorSubject<Usuario | null>(null); 

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    return this.authUser$.asObservable();
  }

  establecerUsuarioAutenticado(usuario: Usuario): void {
    this.authUser$.next(usuario);
  }

  login(formValue: LoginFormValue): void {

    this.httpClient.get<Usuario[]>
      (`${environment.apiBaseUrl}/usuarios`,
        {
          params: {
            ...formValue
          }
        }
    ).subscribe({
      next: (usuarios) => {
        const usuarioAutenticado = usuarios[0];

        if(usuarioAutenticado) {
          localStorage.setItem('token', usuarioAutenticado.token)
          this.establecerUsuarioAutenticado(usuarioAutenticado);
          this.router.navigate(['dashboard']);
        } else {
          alert('Correo y contraseña incorrectos.')
        }
      }
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authUser$.next(null);
    this.router.navigate(['auth']);
  }

  verificarToken(): Observable<boolean> {

    const token = localStorage.getItem('token');

    return this.httpClient.get<Usuario[]>(
      `${environment.apiBaseUrl}/usuarios?token=${token}`,
      {
        headers: new HttpHeaders({
          'Authorization': token || '',
        }),
      }
    )
    .pipe(
      map((usuarios) => {
        const usuarioAutenticado = usuarios[0];
        if(usuarioAutenticado) {
          localStorage.setItem('token', usuarioAutenticado.token)
          this.authUser$.next(usuarioAutenticado);
        }
        return !!usuarioAutenticado;
      }),
      catchError((err) => {
        // alert('Error al verificar el token');
        return of(false);
      })

    );

  }
}
