import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  showFiller = false;

  authUser: Usuario | null = null;

  authUserObs$: Observable<Usuario>;

  // suscripcionAuthUser: Subscription | null = null;
  destroyed$ = new Subject<void>();

  constructor(
    private authService: AuthService
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
}
