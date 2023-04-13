import { Component } from '@angular/core';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
}


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
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

  displayedColumns: string[] = ['id', 'nombreCompleto', 'curso']
}
