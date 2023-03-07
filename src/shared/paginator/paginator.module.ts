import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [ PaginatorComponent ],
  exports: [ PaginatorComponent ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class PaginatorModule { }
