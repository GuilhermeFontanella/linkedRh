import { DictionaryService } from './shared/dictionary.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/shared/table-striped/table.model';
import { PrimeIcons } from 'primeng/api';
import { Dictionary } from './shared/dictionary';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  listOfDictionaries: Dictionary[] = [];
  cols: Table[] = [];

  constructor(
    private service: DictionaryService,
    private router: Router
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
        action: 'edit'
      },
      {
        header: '',
        field: 'acao',
        icon: PrimeIcons.TIMES,
        action: 'delete'
      },
    ]
  }

  processInformation(event: {data: any, action: string}): void {
    if (event.action === 'view') {
      console.log('view');
      this.router.navigate([`dicionario/consulta/${event.data.id}`])
    } else if (event.action === 'edit') {
      console.log('edit');
    } else if (event.action === 'delete') {
      console.log('delete');
    }
    console.log(event); 
  }

}
