import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dictionary } from '../shared/dictionary';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit, OnChanges {
  @Output() closeDialogEvent = new EventEmitter();
  @Output() saveData = new EventEmitter();
  @Input() display: boolean = true;
  @Input() data: Dictionary = {} as Dictionary;
  form: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.createForm(this.data);      
  }

  createForm(data?: any) {
    this.form = this.formBuilder.group({
      id: [data?.id],
      name: [data?.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      bgButton: [data?.bgButton || '#253C89'],
      fontColorButton: [data?.fontColorButton || '#FFFFFF'],
      titleColorFonts: [data?.titleColorFonts || '#253C89'],
      iconColor: [data?.iconColor || '#FFFFFF']
    })
  }

  emitData(): void {
    this.saveData.emit(this.form.value);
  }

}
