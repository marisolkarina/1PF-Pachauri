import { Component } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  dataSource = new MatTableDataSource();

  displayedColumns = ['id', 'curso', 'fecha_inicio', 'fecha_fin', 'opciones']

  constructor(
    private cursosService: CursosService
  ) {}
  
  ngOnInit(): void {
    this.cursosService.obtenerCursos()
      .subscribe({
        next: (cursos) => {
          this.dataSource.data = cursos;
        }
      })
  }

  crearCurso(): void {

  }

  verDetalle(cursoID: Curso): void {

  }

  eliminarABMCurso(curso: Curso):void {

  }
}
