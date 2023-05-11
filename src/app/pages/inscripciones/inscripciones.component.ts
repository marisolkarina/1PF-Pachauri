import { Component } from '@angular/core';
import { Inscripcion } from './models';
import { MatTableDataSource } from '@angular/material/table';
import { InscripcionesService } from './services/inscripciones.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent {
  //
  authUserObs$: Observable<Usuario | null>;

  dataSource = new MatTableDataSource<Inscripcion>();

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'cursoInscrito', 'opciones'];

  constructor(
    private inscripcionesService: InscripcionesService,
    private authService: AuthService
  ) {
    this.authUserObs$ = this.authService.obtenerUsuarioAutenticado();
  }

  ngOnInit(): void {
    this.inscripcionesService.obtenerInscripciones()
      .subscribe({
        next: (inscripciones) => {
          this.dataSource.data = inscripciones;
        }
      })
  }

  eliminarInscripcion(inscripcion: Inscripcion): void {
    if(confirm('Está seguro?')) {
      this.inscripcionesService.eliminarInscripcion(inscripcion.id)
    }    
  }

}
