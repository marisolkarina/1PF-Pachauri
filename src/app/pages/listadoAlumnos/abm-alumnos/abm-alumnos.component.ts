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
  controlFecha = new FormControl('', [Validators.required]);

  myFormAdd = new FormGroup({
    nombre: this.controlName,
    apellido: this.controlLastname,
    fecha_registro: this.controlFecha,
  });

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}

  guardar(): void {
    if(this.myFormAdd.invalid) {
      this.myFormAdd.markAllAsTouched();
    }
    else {
      this.dialogRef.close(this.myFormAdd.value);
    }
  }

}
