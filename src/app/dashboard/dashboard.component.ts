import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showFiller = false;

  authUsr: Usuario | null = null;

  constructor(
    private authService: AuthService
  ) {

  }
}
