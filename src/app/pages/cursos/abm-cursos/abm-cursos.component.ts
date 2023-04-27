import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.css']
})
export class AbmCursosComponent {
  controlCurso = new FormControl('',[Validators.required]);
  controlFechaInicio = new FormControl('', [Validators.required]);
  controlFechaFin = new FormControl('', [Validators.required]);

  myFormAdd = new FormGroup({
    nombre: this.controlCurso,
    fecha_inicio: this.controlFechaInicio,
    fecha_fin: this.controlFechaFin,
  });

  constructor(private dialogRef: MatDialogRef<AbmCursosComponent>) {}

  guardar(): void {
    if(this.myFormAdd.valid) {
      this.dialogRef.close(this.myFormAdd.value);
    }
    else {
      this.myFormAdd.markAllAsTouched();
    }
  }
}
