import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Table } from './table.model';

@Component({
  selector: 'app-table-striped',
  templateUrl: './table-striped.component.html',
  styleUrls: ['./table-striped.component.scss']
})
export class TableStripedComponent implements OnInit {
  @Output() selectedItemEvent = new EventEmitter();
  @Input() data: any[] = [];
  @Input() cols!: Table[];
  @Input() showHeader: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(element: any, action: string): void {
    this.selectedItemEvent.emit({ data: element, action });
  }

}
