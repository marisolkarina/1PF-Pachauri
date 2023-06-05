import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoAlumnosComponent } from './listadoAlumnos.component';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';
import { MatCardModule } from '@angular/material/card';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListadoAlumnosComponent,
    AbmAlumnosComponent,
    AlumnoDetalleComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule,
    DirectivesModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    AlumnosRoutingModule,
    RouterModule.forChild([
      {
        path:'',
        component: ListadoAlumnosComponent
      },
      {
        path: ':id',
        component: AlumnoDetalleComponent
      }
    ])
  ],
  exports: [
    ListadoAlumnosComponent
  ]
})
export class ListadoAlumnosModule { }
