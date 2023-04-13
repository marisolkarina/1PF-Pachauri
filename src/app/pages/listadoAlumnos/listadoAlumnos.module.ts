import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoAlumnosComponent } from './listadoAlumnos.component';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';


@NgModule({
  declarations: [
    ListadoAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    ListadoAlumnosComponent
  ]
})
export class ListadoAlumnosModule { }
