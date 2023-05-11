import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-inscripciones',
  templateUrl: './abm-inscripciones.component.html',
  styleUrls: ['./abm-inscripciones.component.css']
})
export class AbmInscripcionesComponent {
  controlName = new FormControl('',[Validators.required]);
  controlLastname = new FormControl('', [Validators.required]);
  controlCurso = new FormControl('', [Validators.required]);

  myFormAdd = new FormGroup({
    nombre: this.controlName,
    apellido: this.controlLastname,
    curso: this.controlCurso,
  });

  constructor(private dialogRef: MatDialogRef<AbmInscripcionesComponent>) {}

  guardar(): void {
    if(this.myFormAdd.invalid) {
      this.myFormAdd.markAllAsTouched();
    }
    else {
      this.dialogRef.close(this.myFormAdd.value);
    }

  }

}
