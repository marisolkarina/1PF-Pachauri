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


@NgModule({
  declarations: [
    ListadoAlumnosComponent,
    AbmAlumnosComponent
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
    ReactiveFormsModule
  ],
  exports: [
    ListadoAlumnosComponent
  ]
})
export class ListadoAlumnosModule { }
