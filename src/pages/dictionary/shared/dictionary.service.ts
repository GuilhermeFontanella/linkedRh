import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dictionary } from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(
    private http: HttpClient
  ) { }

  getDictionaries(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(`${environment.apiUrl}`);
  }
}
