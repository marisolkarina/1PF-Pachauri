import { BehaviorSubject, Observable, of } from "rxjs";
import { Usuario } from "src/app/models";
import { LoginFormValue } from "src/app/services/auth.service";

export const USUARIO_ADMIN_MOCK: Usuario = {
  id: 1,
  apellido: 'apellidox',
  email: 'emailx@mail.com',
  nombre: 'nombrex',
  role: 'admin',
  token: 'sbdgchneryu',
  password: '123456',
}

export class AuthServiceMock {

  private authUser$ = new BehaviorSubject<Usuario | null>(null);

  login(formValue: LoginFormValue): void {
    this.authUser$.next(USUARIO_ADMIN_MOCK);
  }

  verificarToken(): Observable<boolean> {
    return of(true);
  }
}