import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models';
import { Observable, Subject} from 'rxjs';
import mylinks from './nav-items';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

  authUserObs$: Observable<Usuario | null>;

  links = mylinks;

  destroyed$ = new Subject<void>();

  constructor(
    private authService: AuthService,
  ) { 
    this.authUserObs$ = this.authService.obtenerUsuarioAutenticado();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  cerrarSesion(): void {
    this.authService.logout();
  }

}
