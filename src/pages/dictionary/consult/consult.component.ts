import { DictionaryService } from './../shared/dictionary.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dictionary, WordList } from '../shared/dictionary';
import { HttpParams } from '@angular/common/http';
import { MessageService, ConfirmationService, PrimeIcons } from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  id: number = 0;
  data: WordList[] = [] as WordList[];
  parentDictionary: Dictionary = {} as Dictionary;
  selectedCity!: City;
  filteredByLetter: WordList[] = [] as WordList[];
  display: boolean = false
  editMode: boolean = false;
  createEdit: any;

  constructor(
    private service: DictionaryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getDictionary(this.id);
  }

  getDictionary(id: number): void {
    this.service.getParentDictionaryById(id).subscribe((response) => {
      this.parentDictionary = response;
      this.getDictionaryById(this.id);
    });
  }

  getDictionaryById(id: number): void {
    const params = new HttpParams() 
    .set('parentDictionaryId', id);
    this.service.getDictionaryById(params).subscribe((response) => {
      this.data = response;
      this.data
        .sort((a,b) => (a.word > b.word) 
          ? 1 : ((b.word > a.word) 
          ? -1 : 0)
        )
      })
  }

  filterResults(data: {letter: string}) {
    this.filteredByLetter = [];
    for (let e of this.data) {
      if (e.word[0].includes(data.letter)) {
        this.filteredByLetter.push(e);
      }
    }
  };

  closeDialog(): void {
    this.display = false;
  }

  showDialog(): void {
    this.display = true;
  }

  saveWord(event: any): void {
    this.data = [];
    if (!event.id) {
      this.createNewWord(event);
      this.getDictionary(this.id);
    } else if (event.id) {
      this.updateWord(event);
      this.getDictionary(this.id);
    }
    this.closeDialog();
  }

  createNewWord(data: WordList): void {
    const params = new HttpParams()
    .set('parentDictionaryId', data.parentDictionaryId)
    this.service.createNewWord(params, data).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Nova palavra criada com sucesso!'
      });
    }, () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Ocorreu um erro na criação da palavra.'
      });
    })
  }

  updateWord(data: WordList): void {
    this.service.updateWord(data).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Nova palavra criada com sucesso!'
      });
    }, () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Ocorreu um erro na criação da palavra.'
      });
    })
  }

  setEditMode(): void {
    if (this.editMode) this.editMode = false;
    else this.editMode = true;
    console.log(this.editMode);
  }

  newWord(): void {
    this.createEdit = this.id;
    this.showDialog();
  }

  editWord(data: any): void {
    this.createEdit = data;
    this.showDialog();
  }

  deleteWord(idWord: number): void {
    this.service.deleteWord(idWord).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Palavra excluída com sucesso!'
      });
    }, () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Ocorreu um erro. Ação não executada.'
      });
    })
  }

  confirmDeleteWord(data: any): void {
    this.confirmationService.confirm({
      message: `Deseja excluir ${data.word}?`,
      header: 'Excluir Palavra',
      icon: PrimeIcons.EXCLAMATION_TRIANGLE,
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.deleteWord(Number(data.id));
        this.data = [];
        this.getDictionary(this.id);
      }
    })
  }

}
