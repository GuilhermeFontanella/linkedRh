import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStripedComponent } from './table-striped.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [ TableStripedComponent ],
  exports: [ TableStripedComponent ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ]
})
export class TableStripedModule { }
