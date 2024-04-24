import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubDTO } from './club-dto.model';
import { PlayerDTO } from './player-dto.component';

@Injectable({
  providedIn: 'root'
})
export class ClubsPageService {


  constructor(private http: HttpClient) { }

  getAllClubsInLeague(): Observable<ClubDTO[]> {
    return this.http.get<ClubDTO[]>('http://localhost:8080/api/club/get-all-in-league');
  }
  getPlayersByClubId(clubId: number): Observable<PlayerDTO[]> {
    return this.http.get<PlayerDTO[]>(`http://localhost:8080/api/player/get-player-by-club/${clubId}`)
  }
  generatePDF(clubId:number){
    return this.http.get(`http://localhost:8080/api/stats/period-goals-by-club-id/${clubId}`)
  }
}
