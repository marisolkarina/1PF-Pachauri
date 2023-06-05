import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  dataSource = new MatTableDataSource<Usuario>();

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'role', 'opciones'];

  constructor(
    // private dialog: MatDialog, 
    // private router: Router,
    // private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
  ) {
    
  }


  ngOnInit(): void {
    this.usuariosService.usuarios.subscribe({
      next: (usuarios) => {
        this.dataSource.data = usuarios;
      },
    })

    this.usuariosService.obtenerUsuarios();
  }

  eliminarABMUsuario(usuario: Usuario): void {
    if(confirm('Está seguro?')) {
      this.usuariosService.eliminarUsuario(usuario.id)
    }    
  }
  

}
