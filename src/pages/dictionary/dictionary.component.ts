import { DictionaryService } from './shared/dictionary.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/shared/table-striped/table.model';
import { PrimeIcons } from 'primeng/api';
import { Dictionary } from './shared/dictionary';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  listOfDictionaries: Dictionary[] = [];
  cols: Table[] = [];

  constructor(
    private service: DictionaryService
  ) { }

  ngOnInit(): void {
    this.getDictionariesList();
  }

  getDictionariesList(): void {
    this.service.getDictionaries().subscribe((response) => {
      this.listOfDictionaries = response;
      this.populateTable()
    });
  }

  populateTable(): void {
    this.cols = [
      {
        header: '',
        field: 'name',
        icon: ''
      },
      {
        header: '',
        field: 'acao',
        icon: PrimeIcons.SEARCH,
        action: 'view'
      },
      {
        header: '',
        field: 'description',
        icon: ''
      },
      {
        header: '',
        field: 'acao',
        icon: PrimeIcons.COG,
        action: 'view'
      },
      {
        header: '',
        field: 'acao',
        icon: PrimeIcons.TIMES,
        action: 'view'
      },
    ]
  }

}
