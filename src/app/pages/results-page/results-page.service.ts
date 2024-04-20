import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultsDTO } from './result-page-dto.model';
import { Observable } from 'rxjs';
import { TeamDTO } from './team-dto.component';
import { StatsDTO } from './stats-dto.component';

@Injectable({
  providedIn: 'root'
})
export class ResultsPageService {


  constructor(private http: HttpClient) { }

  getResults(): Observable<ResultsDTO[]> {
    return this.http.get<ResultsDTO[]>('http://localhost:8080/api/match/get-results');
  }
  getMatches(name: string): Observable<ResultsDTO[]>{
    return this.http.get<ResultsDTO[]>(`http://localhost:8080/api/match/get-all-by-club/${name}`);
  }
  getClubs(): Observable<TeamDTO[]>{
    return this.http.get<TeamDTO[]>(`http://localhost:8080/api/club/get-all-in-league`);
  }
  getStats(matchId: number):Observable<StatsDTO> {
    return this.http.get<StatsDTO>(`http://localhost:8080/api/stats/get-by-match-id/${matchId}`);
  }
}
