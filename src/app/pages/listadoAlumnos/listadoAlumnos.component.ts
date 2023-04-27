import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from './services/alumnos.service';
import { Alumno } from './models';

@Component({
  selector: 'app-listadoAlumnos',
  templateUrl: './listadoAlumnos.component.html',
  styleUrls: ['./listadoAlumnos.component.css']
})
export class ListadoAlumnosComponent {

  dataSource = new MatTableDataSource<Alumno>();

  displayedColumns: string[] = ['id', 'nombreCompleto', 'fecha_registro', 'opciones'];

  constructor(
    private dialog: MatDialog, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {}


  ngOnInit(): void {
    this.alumnosService.obtenerAlumnos()
      .subscribe({
        next: (alumnos) => {
          this.dataSource.data = alumnos;
        }
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
    const dialog = this.dialog.open(AbmAlumnosComponent);
    dialog.afterClosed()
      .subscribe((formValue) => {
        if (formValue) {
          this.alumnosService.crearAlumno(formValue)
        }
      });
  }

  eliminarABMAlumno(row: Alumno): void {
    if(confirm('Está seguro?')) {
      const indice = this.dataSource.data.findIndex((est) => est.id === row.id);
      if (indice >= 0) {
        this.dataSource.data.splice(indice, 1);
        this.dataSource._updateChangeSubscription();
      }
    }
    
    
  }
}
