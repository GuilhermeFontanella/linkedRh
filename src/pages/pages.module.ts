import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryModule } from './dictionary/dictionary.module';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DictionaryModule
  ]
})
export class PagesModule { }
