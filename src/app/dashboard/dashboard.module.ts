import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormularioModule } from '../pages/formulario/formulario.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { InscripcionesComponent } from '../pages/inscripciones/inscripciones.component';
import { UsuariosComponent } from '../pages/usuarios/usuarios.component';
import { AdminGuard } from '../auth/guards/admin.guard';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormularioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: 'inscripciones',
        component: InscripcionesComponent
      },
      {
        path: 'alumnos',
        loadChildren: () => import('../pages/listadoAlumnos/listadoAlumnos.module').then((m) => m.ListadoAlumnosModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../pages/cursos/cursos.module').then((m) => m.CursosModule)
      },
      {
        path: 'usuarios',
        canActivate: [AdminGuard],
        component: UsuariosComponent
      }
    ])
    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
