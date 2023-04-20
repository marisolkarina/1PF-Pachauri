import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormularioModule } from '../pages/formulario/formulario.module';
import { ListadoAlumnosModule } from '../pages/listadoAlumnos/listadoAlumnos.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ObservablesModule } from '../pages/observables/observables.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormularioModule,
    ListadoAlumnosModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ObservablesModule
    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
