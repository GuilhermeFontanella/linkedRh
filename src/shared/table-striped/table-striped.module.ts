import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStripedComponent } from './table-striped.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [ TableStripedComponent ],
  exports: [ TableStripedComponent ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class TableStripedModule { }
