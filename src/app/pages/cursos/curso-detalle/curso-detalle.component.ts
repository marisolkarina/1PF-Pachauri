import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../models';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent {

  curso: Curso | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosService
  ) {
    this.cursosService.obtenerCursoPorId(parseInt(this.activatedRoute.snapshot.params['id']))
      .subscribe((curso) => this.curso = curso)
  }
}
