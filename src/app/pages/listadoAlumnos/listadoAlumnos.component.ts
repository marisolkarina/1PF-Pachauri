import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
}


@Component({
  selector: 'app-listadoAlumnos',
  templateUrl: './listadoAlumnos.component.html',
  styleUrls: ['./listadoAlumnos.component.css']
})
export class ListadoAlumnosComponent {
  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Sosa',
      curso: 'Aritmetica',
    },
    {
      id: 2,
      nombre: 'Rosa',
      apellido: 'Lima',
      curso: 'Historia',
    },
    {
      id: 3,
      nombre: 'Lisa',
      apellido: 'Simpson',
      curso: 'Literatura',
    }
  ]
  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id', 'nombreCompleto', 'curso'];

  constructor(private matDialog: MatDialog) {}

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [...this.dataSource.data, valor];
      }
    })
  }
}
