import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm-usuarios',
  templateUrl: './abm-usuarios.component.html',
  styleUrls: ['./abm-usuarios.component.css']
})
export class AbmUsuariosComponent {
  controlName = new FormControl('',[Validators.required]);
  controlLastname = new FormControl('', [Validators.required]);
  controlRole = new FormControl('', [Validators.required]);

  myFormAdd = new FormGroup({
    nombre: this.controlName,
    apellido: this.controlLastname,
    role: this.controlRole,
  });
  
}
