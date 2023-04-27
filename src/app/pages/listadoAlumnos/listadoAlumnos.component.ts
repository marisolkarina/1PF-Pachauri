import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from './services/alumnos.service';


export interface Alumno {
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

  dataSource = new MatTableDataSource<Alumno>();

  displayedColumns: string[] = ['id', 'nombreCompleto', 'curso', 'opciones'];

  constructor(
    private matDialog: MatDialog, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {
    this.alumnosService.obtenerAlumnos()
      .subscribe((alumnos) => {
        this.dataSource.data = alumnos;
      }) 
  }

  verDetalle(alumnoId:number): void {
    this.router.navigate([alumnoId], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: 1,
        limit: 50
      }
    });
  }

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent);
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

  eliminarABMAlumno(row: Alumno): void {
    const indice = this.dataSource.data.findIndex((est) => est.id === row.id);
    if (indice >= 0) {
      this.dataSource.data.splice(indice, 1);
      this.dataSource._updateChangeSubscription();
    }
  }
}
