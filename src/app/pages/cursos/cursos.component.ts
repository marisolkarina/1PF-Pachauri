import { Component } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  dataSource = new MatTableDataSource();

  displayedColumns = ['id', 'curso', 'fecha_inicio', 'fecha_fin', 'opciones']

  constructor(
    private cursosService: CursosService,
    private matDialog: MatDialog, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
    const dialog = this.matDialog.open(AbmCursosComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        
        this.dataSource.data = [
          ...this.dataSource.data, 
          {
            ...valor,
            id: this.dataSource.data.length + 1,
          }
        
        ];console.log(this.dataSource.data)
      }
    })
  }

  verDetalle(cursoId: Curso): void {
    this.router.navigate([cursoId], {
      relativeTo: this.activatedRoute,
    });
  }

  eliminarABMCurso(curso: Curso):void {

  }
}
