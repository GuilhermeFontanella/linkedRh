import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryModule } from './dictionary/dictionary.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ConsultModule } from './dictionary/consult/consult.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DictionaryModule,
    ConsultModule
  ]
})
export class PagesModule { }
