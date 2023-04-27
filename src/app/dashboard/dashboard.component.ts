import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import mylinks from './nav-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

  apareceLogin = true;
  apareceRegister = true;
  apareceJson = true;

  authUser: Usuario | null = null;

  authUserObs$: Observable<Usuario>;

  links = mylinks;

  destroyed$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.authUserObs$ = this.authService.obtenerUsuarioAutenticado();
    
    this.authService.obtenerUsuarioAutenticado()
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((usuario) => this.authUser = usuario);
  }

  ngOnDestroy(): void {
    // this.suscripcionAuthUser?.unsubscribe();
    this.destroyed$.next();
  }

  goLogin(): void {
    this.router.navigate(['dashboard','login']);
    this.apareceLogin = false;
    this.apareceJson = false;
  }
  goRegister(): void {
    this.router.navigate(['dashboard','register']);
    this.apareceRegister = false;
    this.apareceJson = true;
  }
  cerrarSesion(): void {
    this.router.navigate(['dashboard']);
    this.apareceJson = true;
  }

}
