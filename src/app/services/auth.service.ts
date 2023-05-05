import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Usuario } from '../models';
import { Router } from '@angular/router';

export interface LoginFormValue {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUser$ = new BehaviorSubject<Usuario | null>(null); 

  constructor(private router: Router) { }

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    return this.authUser$.asObservable();
  }

  login(formValue: LoginFormValue): void {
    const usuario = {
      id: 1,
      nombre: 'MOCK',
      apellido: 'USER',
      email: formValue.email,
      password: '123'
    }
    localStorage.setItem('auth-user',JSON.stringify(usuario));
    this.authUser$.next(usuario);
    this.router.navigate(['dashboard'])
  }
}
