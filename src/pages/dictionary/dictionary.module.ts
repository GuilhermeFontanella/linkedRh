import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary.component';
import { DictionaryRoutingModule } from './dictionary-routing.module';
import { TableStripedModule } from 'src/shared/table-striped/table-striped.module';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { CreateEditModule } from './create-edit/create-edit.module';


@NgModule({
  declarations: [ DictionaryComponent ],
  exports: [ DictionaryComponent ],
  imports: [
    CommonModule,
    DictionaryRoutingModule,
    TableStripedModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,
    CreateEditModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class DictionaryModule { }
