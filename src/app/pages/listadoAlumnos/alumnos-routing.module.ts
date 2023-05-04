import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListadoAlumnosComponent } from './listadoAlumnos.component';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: ListadoAlumnosComponent
    //   },
    //   {
    //     path: ':id',
    //     component: AlumnoDetalleComponent
    //   }
    // ])
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnosRoutingModule { }
