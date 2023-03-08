import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dictionary, DictionaryData, WordList } from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(
    private http: HttpClient
  ) { }

  getDictionaries(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(`${environment.apiUrl}dicionarios`);
  }

  getParentDictionaryById(id: number): Observable<Dictionary> {
    return this.http.get<Dictionary>(`${environment.apiUrl}dicionarios/${id}`);
  }

  getDictionaryById(params: HttpParams): Observable<WordList[]> {
    return this.http.get<WordList[]>(`${environment.apiUrl}dicionario?${params}`);
  }

  deleteDictionary(id: number): Observable<Dictionary> {
    return this.http.delete<Dictionary>(`${environment.apiUrl}dicionarios/${id}`);
  }

  createNewDictionary(data: Dictionary): Observable<Dictionary> {
    return this.http.post<Dictionary>(`${environment.apiUrl}dicionarios`, data);
  }

  updateDictionary(data: Dictionary): Observable<Dictionary> {
    return this.http.put<Dictionary>(`${environment.apiUrl}dicionarios/${data.id}`, data);
  }

  createNewWord(params: HttpParams, data: WordList): Observable<WordList> {
    return this.http.post<WordList>(`${environment.apiUrl}dicionario?${params}`, data);
  }

  updateWord(data: WordList): Observable<WordList> {
    return this.http.put<WordList>(`${environment.apiUrl}dicionario/${data.id}`, data);
  }

  deleteWord(idWord: number): Observable<WordList> {
    return this.http.delete<WordList>(`${environment.apiUrl}dicionario/${idWord}`);
  }
}
