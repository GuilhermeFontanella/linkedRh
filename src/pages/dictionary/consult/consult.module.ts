import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './consult.component';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'src/shared/paginator/paginator.module';
import { ButtonModule } from 'primeng/button';
import { CreateEditModule } from '../create-edit/create-edit.module';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';




@NgModule({
  declarations: [ ConsultComponent ],
  exports: [ ConsultComponent ],
  imports: [
    CommonModule,
    ListboxModule,
    FormsModule,
    DividerModule,
    PaginatorModule,
    PaginatorModule,
    ButtonModule,
    CreateEditModule,
    MessagesModule,
    TooltipModule,
    ConfirmDialogModule
  ]
})
export class ConsultModule { }
