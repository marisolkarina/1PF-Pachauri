import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla.component';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule
  ],
  exports: [
    TablaComponent
  ]
})
export class TablaModule { }
