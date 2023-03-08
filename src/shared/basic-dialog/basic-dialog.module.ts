import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDialogComponent } from './basic-dialog.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [ BasicDialogComponent ],
  exports: [ BasicDialogComponent ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
  ]
})
export class BasicDialogModule { }
