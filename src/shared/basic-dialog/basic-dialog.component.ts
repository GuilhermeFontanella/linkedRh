import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent implements OnInit, OnChanges {
  @Output() closeDialogEvent = new EventEmitter();
  @Input() display: boolean = true;
  @Input() data: any;
  @Input() header: string = '';
  text: any;

  constructor() { }

  ngOnInit(): void  {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let extraMeaning = new DOMParser().parseFromString(this.data?.extraMeaning, 'text/xml');
    this.text = extraMeaning.querySelector('p')?.innerHTML
  }

}
