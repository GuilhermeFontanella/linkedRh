import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Table } from './table.model';

@Component({
  selector: 'app-table-striped',
  templateUrl: './table-striped.component.html',
  styleUrls: ['./table-striped.component.scss']
})
export class TableStripedComponent implements OnInit, OnChanges {
  @Output() selectedItemEvent = new EventEmitter();
  @Input() data: any[] = [];
  @Input() cols!: Table[];
  @Input() showHeader: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  emitEvent(element: any): void {
    this.selectedItemEvent.emit(element);
  }

}
