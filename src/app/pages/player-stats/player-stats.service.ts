import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerDTO } from '../clubs-page/player-dto.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  constructor(private http: HttpClient) { }

  getGoals(): Observable<PlayerDTO[]> {
    return this.http.get<PlayerDTO[]>(`http://localhost:8080/api/player/players-goals`);
  }

  getAssists(): Observable<PlayerDTO[]> {
    return this.http.get<PlayerDTO[]>(`http://localhost:8080/api/player/players-assists`);
  }
}
