import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    TablaComponent
  ]
})
export class TablaModule { }
