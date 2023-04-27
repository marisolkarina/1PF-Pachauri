import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoAlumnosComponent } from './pages/listadoAlumnos/listadoAlumnos.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { AlumnoDetalleComponent } from './pages/listadoAlumnos/alumno-detalle/alumno-detalle.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursoDetalleComponent } from './pages/cursos/curso-detalle/curso-detalle.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'inscripciones',
        component: InscripcionesComponent
      },
      {
        path: 'alumnos',
        component: ListadoAlumnosComponent
      },
      {
        path: 'alumnos/:id',
        component: AlumnoDetalleComponent
      },
      {
        path: 'login',
        component: ObservablesComponent
      },
      {
        path: 'register',
        component: FormularioComponent
      },
      {
        path: 'cursos',
        component: CursosComponent
      },
      {
        path: 'cursos/:id',
        component: CursoDetalleComponent
      }
    ] 
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
