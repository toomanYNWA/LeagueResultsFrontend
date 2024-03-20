import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClubRankDTO } from './club-rank-dto.model';

@Injectable({
  providedIn: 'root'
})
export class TablePageService {

  constructor(private http: HttpClient) { }

  getClubRanks() {
   return this.http.get<ClubRankDTO[]>('http://localhost:8080/api/club-rank/get-all');
  }

}
