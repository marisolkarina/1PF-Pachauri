import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla.component';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';


@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    TablaComponent
  ]
})
export class TablaModule { }
