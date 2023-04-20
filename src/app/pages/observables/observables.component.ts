import { Component, OnInit } from '@angular/core';
import { Subject, from } from 'rxjs'
import { NotificationsService } from 'src/app/services/notifications.service';

interface Usuario {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit{

  isLoggedIn = new Subject<Usuario>()

  notifier = new Subject<string>()

  constructor(private notificationsService: NotificationsService){}

  async ngOnInit(): Promise<void> {

    this.escucharLoggedIn();

    this.notifier.next('Se completó con éxito');

    const obtenerUsuario = new Promise((resolve, reject) => {
      resolve({
        id:1,
        nombre: 'Marisol'
      })
    });

    // console.log(await obtenerUsuario);

    // Convertir promesa en observable
    const obs$ = from(obtenerUsuario);
    
    setTimeout(() => {
      this.isLoggedIn.next({
        id: 5,
        nombre: 'Karina'
      })
    }, 1000);

    setTimeout(() => {
      this.isLoggedIn.next({
        id: 8,
        nombre: 'Lucía'
      })
    }, 3000);

    // obs$
    //   .pipe(

    //   )
    //   .subscribe((valor) => console.log(valor));

  }

  crearUsuario(): void {
    this.notificationsService.mostrarMensaje("Usuario creado correctamente");
  }

  escucharLoggedIn(): void {
    this.isLoggedIn.subscribe((valor) => console.log(valor));
  }

}
