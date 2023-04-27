import { Component } from '@angular/core';
import { CursosService } from './services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  constructor(
    private cursosService: CursosService
  ) {}
  
  ngOnInit(): void {
    this.cursosService.obtenerCursos()
      .subscribe(console.log)
  }
}
