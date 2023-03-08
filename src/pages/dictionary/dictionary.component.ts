import { DictionaryService } from './shared/dictionary.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/shared/table-striped/table.model';
import { MessageService, PrimeIcons } from 'primeng/api';
import { Dictionary } from './shared/dictionary';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  listOfDictionaries: Dictionary[] = [];
  cols: Table[] = [];
  display: boolean = false;
  itemSelected: Dictionary = {} as Dictionary;

  constructor(
    private service: DictionaryService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
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

  processInformation(event?: {data: any, action: string}): void {
    if (!event) {
      this.itemSelected = {} as Dictionary;
      this.openDialog();
    } else if (event?.action === 'view') {
      this.router.navigate([`dicionario/consulta/${event.data.id}`])
    } else if (event?.action === 'edit') {
      this.itemSelected = event.data;
      this.openDialog();
    } else if (event?.action === 'delete') {
      this.confirmationService.confirm({
        message: `Deseja excluir ${event.data.name}?`,
        header: 'Excluir Dicionário',
        icon: PrimeIcons.EXCLAMATION_TRIANGLE,
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
          this.deleteDictionary(event.data.id);
        }
      })
    }
  }

  deleteDictionary(id: number): void {
    this.service.deleteDictionary(id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Dicionário excluído com sucesso!'
      });
      this.getDictionariesList();
    }, (error) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Ocorreu um erro ao tentar excluir esse dicionário.'
      });
    })
  }

  openDialog(): void {
    this.display = true;
  }

  closeDialog(): void {
    this.display = false;
  }

  saveData(event: any): void {
    if (!event.id) {
      this.service.createNewDictionary(event).subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Dicionário criado com sucesso!'
        });
        this.getDictionariesList();
        this.closeDialog();
      }, (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ocorreu um erro.'
        });
        this.getDictionariesList();
        this.closeDialog();
      })
    } else {
      this.service.updateDictionary(event).subscribe(() => {
        this.messageService.add({
          severity: 'info',
          summary: 'Dicionário atualizado!'
        });
        this.getDictionariesList();
        this.closeDialog();
      }, (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ocorreu um erro.'
        });
        this.getDictionariesList();
        this.closeDialog();
      })
    }
  }

}
