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
  @Input() data: any;
  @Input() isDictionary: boolean = false;
  @Input() isWord: boolean = false;
  @Input() header: string = 'Dicionário';

  form: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
    
    if (this.isDictionary) this.createForm(this.data);  
    else this.createForm(this.data);     
  }

  createForm(data?: any) {
    if (this.isDictionary) {
      this.form = this.formBuilder.group({
        id: [data?.id],
        name: [data?.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        bgButton: [data?.bgButton || '#253C89'],
        fontColorButton: [data?.fontColorButton || '#FFFFFF'],
        titleColorFonts: [data?.titleColorFonts || '#253C89'],
        iconColor: [data?.iconColor || '#FFFFFF']
      })
    } else if (this.isWord) {
      this.form = this.formBuilder.group({
        id: [data?.id],
        parentDictionaryId: [(data?.parentDictionaryId ? data?.parentDictionaryId : data)],
        word: [data?.word, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        meaning: [data?.meaning, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        extraMeaning: [data?.extraMeaning, [Validators.required, Validators.minLength(3)]],
      })
    }
  }

  emitData(): void {    
    this.saveData.emit(this.form.value);
  }

}
