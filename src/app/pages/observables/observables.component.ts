import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Subject, from, interval, map } from 'rxjs'
import { NotificationsService } from 'src/app/services/notifications.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Usuario {
  id: number,
  name: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit{
  controlName = new FormControl('',[Validators.required]);
  controlEmail = new FormControl('', [Validators.required, Validators.email]);
  controlPassword = new FormControl('', [Validators.required]);

  myForm = new FormGroup({
    name: this.controlName,
    email: this.controlEmail,
    password: this.controlPassword,
  });

  matcher = new MyErrorStateMatcher();

  hide = true;


  isLoggedIn = new Subject<Usuario>()

  notifier = new Subject<string>()

  constructor(
    private notificationsService: NotificationsService,
    private authService: AuthService
  ){}

  async ngOnInit(): Promise<void> {

    this.suscribirseAInterval();

    this.escucharLoggedIn();

    this.notifier.next('Se completó con éxito');

    const obtenerUsuario = new Promise((resolve, reject) => {
      resolve({
        id:1,
        name: 'marisol',
        email: 'marisol@gmail.com',
        password: '987'
      })
    });

    // Convertir promesa en observable
    const obs$ = from(obtenerUsuario);
    
    setTimeout(() => {
      this.isLoggedIn.next({
        id: 5,
        name: 'karina',
        email: 'karina@gmail.com',
        password: '123'
      })
    }, 1000);

    setTimeout(() => {
      this.isLoggedIn.next({
        id: 8,
        name: 'lucia',
        email: 'lucia@gmail.com',
        password: '321'
      })
    }, 3000);

  }

  suscribirseAInterval() {
    interval(1000)
      .pipe(
       // map((v) => v*2)
      )
     // .subscribe((v) => console.log(v));
  }

  // crearUsuario(): void {
  //   this.notificationsService.mostrarMensaje("Usuario creado correctamente");
  // }

  escucharLoggedIn(): void {
    this.isLoggedIn.subscribe((valor) => console.log(valor));
  }


  login(): void {
    if(this.myForm.valid) {
      console.log(this.myForm.value);
      this.authService.login({
        ...(this.myForm.value as any),
        id: 50
      })
    } else {
      console.log('Formulario invalido');
      this.notificationsService.mostrarMensaje("Formulario inválido");
    }
    
    
  }

}
