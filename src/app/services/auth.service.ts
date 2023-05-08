import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Usuario } from '../models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

  login(formValue: LoginFormValue): void {
    // const usuario = {
    //   id: 1,
    //   nombre: 'MOCK',
    //   apellido: 'USER',
    //   email: formValue.email,
    //   password: '123'
    // }
    // localStorage.setItem('auth-user',JSON.stringify(usuario));
    // this.authUser$.next(usuario);
    // this.router.navigate(['dashboard'])

    this.httpClient.get<Usuario[]>(`${environment.apiBaseUrl}/usuarios`,
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
          this.authUser$.next(usuarioAutenticado);
          this.router.navigate(['dashboard']);
        } else {
          alert('Correo y contraseña incorrectos.')
        }
      }
    })
  }

  verificarToken(): Observable<boolean> {

    const token = localStorage.getItem('token');

    return this.httpClient.get<Usuario[]>(`${environment.apiBaseUrl}/usuarios?token=${token}`)
    .pipe(
      map((usuarios) => {
        const usuarioAutenticado = usuarios[0];
        if(usuarioAutenticado) {
          localStorage.setItem('token', usuarioAutenticado.token)
          this.authUser$.next(usuarioAutenticado);
        }
        return !!usuarioAutenticado;
      })
    )

    // if (storageValor) {
    //   const usuario = JSON.parse(storageValor);
    //   this.authUser$.next(usuario);
    // }
  }
}
