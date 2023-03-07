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
    this.populateTable()
  }

  getDictionariesList(): void {
    this.service.getDictionaries().subscribe((response) => {
      this.listOfDictionaries = response;
    });
  }

  populateTable(): void {
    this.cols = [
      {
        header: '',
        field: 'name',
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
