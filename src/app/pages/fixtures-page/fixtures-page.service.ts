import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultsDTO } from '../results-page/result-page-dto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixturesPageService {

  constructor(private http: HttpClient) { }

  getResults(): Observable<ResultsDTO[]> {
    return this.http.get<ResultsDTO[]>('http://localhost:8080/api/match/get-fixtures');
  }
}
