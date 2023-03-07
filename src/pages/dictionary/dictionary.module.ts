import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary.component';
import { DictionaryRoutingModule } from './dictionary-routing.module';
import { TableStripedModule } from 'src/shared/table-striped/table-striped.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ DictionaryComponent ],
  exports: [ DictionaryComponent ],
  imports: [
    CommonModule,
    DictionaryRoutingModule,
    TableStripedModule,
    ButtonModule
  ]
})
export class DictionaryModule { }
