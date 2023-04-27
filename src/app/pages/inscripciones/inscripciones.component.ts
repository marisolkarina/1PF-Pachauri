import { Component } from '@angular/core';
import { Inscripcion } from './models';
import { MatTableDataSource } from '@angular/material/table';
import { InscripcionesService } from './services/inscripciones.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent {
  dataSource = new MatTableDataSource<Inscripcion>();

  displayedColumns: string[] = ['id', 'nombreCompleto', 'cursoInscrito'];

  constructor(
    private inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.inscripcionesService.obtenerInscripciones()
      .subscribe({
        next: (inscripciones) => {
          this.dataSource.data = inscripciones;
        }
      })
  }
}
