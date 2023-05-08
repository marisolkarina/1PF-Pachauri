import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormularioModule } from '../pages/formulario/formulario.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ObservablesModule } from '../pages/observables/observables.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CursoDetalleComponent } from '../pages/cursos/curso-detalle/curso-detalle.component';
import { CursosComponent } from '../pages/cursos/cursos.component';
import { InscripcionesComponent } from '../pages/inscripciones/inscripciones.component';
import { AlumnoDetalleComponent } from '../pages/listadoAlumnos/alumno-detalle/alumno-detalle.component';
import { ListadoAlumnosComponent } from '../pages/listadoAlumnos/listadoAlumnos.component';



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
    ObservablesModule,
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
        // children: [
        //   {
        //     path: '',
        //     component: ListadoAlumnosComponent
        //   },
        //   {
        //     path: ':id',
        //     component: AlumnoDetalleComponent
        //   }
        // ]
      },
      {
        path: 'cursos',
        loadChildren: () => import('../pages/cursos/cursos.module').then((m) => m.CursosModule)
        // children: [
        //   {
        //     path: '',
        //     component: CursosComponent
        //   },
        //   {
        //     path: ':id',
        //     component: CursoDetalleComponent
        //   }
        // ]
      }
    ])
    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
