import { DictionaryService } from './../shared/dictionary.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DictionaryData, Dictionary, WordList } from '../shared/dictionary';
import { HttpParams } from '@angular/common/http';

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
  data: DictionaryData[] = [] as DictionaryData[];
  parentDictionary: Dictionary = {} as Dictionary;
  selectedCity!: City;
  filteredByLetter: WordList[] = [] as WordList[];

  constructor(
    private service: DictionaryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getDictionary(this.id);
  }

  getDictionary(id: number): void {
    this.service.getParentDictionaryById(id).subscribe((response) => {
      this.parentDictionary = response;
    });
    this.getDictionaryById(this.id);
  }

  getDictionaryById(id: number): void {
    const params = new HttpParams() 
    .set('parentDictionaryId', id);
    this.service.getDictionaryById(params).subscribe((response) => {
      this.data = response;
      this.data.map((e) => {
        e.wordList.sort((a,b) => (a.word > b.word) 
          ? 1 : ((b.word > a.word) 
          ? -1 : 0)
        )
      })
    })
  }


  filterResults(data: {letter: string}) {
    this.filteredByLetter = [];
    this.data.map((el) => {
      for (let e of el.wordList) {
        if (e.word[0].includes(data.letter)) {
          this.filteredByLetter.push(e);
        }
      }
    })
  }

}
