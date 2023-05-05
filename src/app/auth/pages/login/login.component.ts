import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subject, from, interval, map } from 'rxjs';
import { AuthService, LoginFormValue } from 'src/app/services/auth.service';
import { NotificationsService } from 'src/app/services/notifications.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
// interface Usuario {
//   id: number,
//   name: string,
//   email: string,
//   password: string
// }


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // controlName = new FormControl('',[Validators.required]);
  controlEmail = new FormControl('', [Validators.required, Validators.email]);
  controlPassword = new FormControl('', [Validators.required]);

  myForm = new FormGroup({
    // name: this.controlName,
    email: this.controlEmail,
    password: this.controlPassword,
  });

  matcher = new MyErrorStateMatcher();

  hide = true;


  // isLoggedIn = new Subject<Usuario>()

  // notifier = new Subject<string>()

  constructor(
    private notificationsService: NotificationsService,
    private authService: AuthService
  ){}

  // async ngOnInit(): Promise<void> {

    // this.suscribirseAInterval();

    // this.escucharLoggedIn();

    // this.notifier.next('Se completó con éxito');

    // const obtenerUsuario = new Promise((resolve, reject) => {
    //   resolve({
    //     id:1,
    //     name: 'marisol',
    //     email: 'marisol@gmail.com',
    //     password: '987'
    //   })
    // });

    // // Convertir promesa en observable
    // const obs$ = from(obtenerUsuario);
    
    // setTimeout(() => {
    //   this.isLoggedIn.next({
    //     id: 5,
    //     name: 'karina',
    //     email: 'karina@gmail.com',
    //     password: '123'
    //   })
    // }, 1000);

    // setTimeout(() => {
    //   this.isLoggedIn.next({
    //     id: 8,
    //     name: 'lucia',
    //     email: 'lucia@gmail.com',
    //     password: '321'
    //   })
    // }, 3000);

  // }

  // suscribirseAInterval() {
  //   interval(1000)
  //     .pipe(
  //       map((v) => v*2)
  //     )
  //   .subscribe((v) => console.log(v));
  // }

  crearUsuario(): void {
    this.notificationsService.mostrarMensaje("Usuario creado correctamente");
  }

  // escucharLoggedIn(): void {
  //   this.isLoggedIn.subscribe((valor) => console.log(valor));
  // }


  login(): void {
    if(this.myForm.valid) {
      
      // this.authService.login({
      //   ...(this.myForm.value as any),
      //   id: 50
      // })
      this.authService.login(this.myForm.value as LoginFormValue);
    } else {

      this.notificationsService.mostrarMensaje("Formulario inválido");
    }
    
    
  }


  
}
