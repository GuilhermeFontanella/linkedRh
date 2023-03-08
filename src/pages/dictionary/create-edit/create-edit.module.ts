import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditComponent } from './create-edit.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
import { EditorModule } from 'primeng/editor';


@NgModule({
  declarations: [
    CreateEditComponent
  ],
  exports: [ CreateEditComponent ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ColorPickerModule,
    EditorModule
  ]
})
export class CreateEditModule { }
