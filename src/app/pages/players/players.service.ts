import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractDTO } from './contract-dto.component';
import { Page } from './players-page.component';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getAllPlayers(pageNumber: number): Observable<Page<ContractDTO>> {
    return this.http.get<Page<ContractDTO>>(`http://localhost:8080/api/contract/get-all-page/${pageNumber}`);
  }
}
