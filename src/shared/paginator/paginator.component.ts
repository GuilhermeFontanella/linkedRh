import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() letterSelected = new EventEmitter();

  alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Todos'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  defineActiveLink(index: number): void {
    let liActive = document.querySelector(`#list:nth-child(${index + 1})`);
    document.querySelectorAll('#list').forEach(e => e.classList.remove('active'));
    liActive?.classList.add('active');
  }

}
