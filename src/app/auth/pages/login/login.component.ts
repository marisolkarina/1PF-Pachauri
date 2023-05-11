import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService, LoginFormValue } from 'src/app/services/auth.service';
import { NotificationsService } from 'src/app/services/notifications.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  controlEmail = new FormControl('', [Validators.required, Validators.email]);
  controlPassword = new FormControl('', [Validators.required]);

  myForm = new FormGroup({
    email: this.controlEmail,
    password: this.controlPassword,
  });

  matcher = new MyErrorStateMatcher();

  hide = true;

  constructor(
    private notificationsService: NotificationsService,
    private authService: AuthService
  ){}


  crearUsuario(): void {
    this.notificationsService.mostrarMensaje("Usuario creado correctamente");
  }


  login(): void {
    if(this.myForm.valid) {

      this.authService.login(this.myForm.value as LoginFormValue);
    } else {

      this.notificationsService.mostrarMensaje("Formulario inválido");
    }
    
    
  }


  
}
