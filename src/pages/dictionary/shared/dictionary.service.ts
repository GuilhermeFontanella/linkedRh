import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dictionary, DictionaryData } from './dictionary';

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

  getDictionaryById(params: HttpParams): Observable<DictionaryData[]> {
    return this.http.get<DictionaryData[]>(`${environment.apiUrl}dicionario?${params}`);
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
}
