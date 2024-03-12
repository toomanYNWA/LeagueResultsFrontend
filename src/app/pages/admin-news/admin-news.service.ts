import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsDTO } from './news-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AdminNewsService {

  constructor(private http: HttpClient) { }

  uploadNews(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/news/create', data);
  }
  getAllNews(): Observable<NewsDTO[]> {
    return this.http.get<NewsDTO[]>('http://localhost:8080/api/news/get-all');
  }
}
