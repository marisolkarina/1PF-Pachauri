import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { NotificationsService } from 'src/app/services/notifications.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  controlName = new FormControl('',[Validators.required]);
  controlLastname = new FormControl('', [Validators.required]);
  controlGrado = new FormControl('', [Validators.required]);
  controlEmail = new FormControl('', [Validators.required, Validators.email]);
  controlPassword = new FormControl('', [Validators.required]);
  controlAddress = new FormControl('', [Validators.required]);

  myForm = new FormGroup({
    name: this.controlName,
    lastname: this.controlLastname,
    grado: this.controlGrado,
    email: this.controlEmail,
    password: this.controlPassword,
    adress: this.controlAddress,
  });

  constructor(
    private notificationsService: NotificationsService,
  ) {}

  matcher = new MyErrorStateMatcher();

  hide = true;

  crearUsuario(): void {
    if(this.myForm.valid) {
      this.notificationsService.mostrarMensaje("Usuario creado correctamente");
    } else {
      this.notificationsService.mostrarMensaje("Registre datos válidos");
    }
  }


}
