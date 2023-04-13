import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class AbmAlumnosComponent {
  controlName = new FormControl('',[Validators.required]);
  controlLastname = new FormControl('', [Validators.required]);
  controlCurso = new FormControl('', [Validators.required]);

  myFormAdd = new FormGroup({
    nombre: this.controlName,
    apellido: this.controlLastname,
    curso: this.controlCurso,
  });

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}

  guardar(): void {
    if(this.myFormAdd.valid) {
      this.dialogRef.close(this.myFormAdd.value);
    }
    else {
      this.myFormAdd.markAllAsTouched();
    }
  }

}
