import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './consult/consult.component';
import { DictionaryComponent } from './dictionary.component';

const routes: Routes = [
  {
    path: '',
    component: DictionaryComponent
  },
  {
    path: 'dicionario/consulta/:id',
    component: ConsultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule { }
