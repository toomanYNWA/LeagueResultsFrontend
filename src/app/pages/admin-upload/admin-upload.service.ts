import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    // Set any additional headers if needed

    return this.http.post('http://localhost:8080/api/club-rank/upload-data', formData, { headers });
  }
  uploadFilePlayers(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    // Set any additional headers if needed

    return this.http.post('http://localhost:8080/api/player/upload-data', formData, { headers });
  }
  uploadFileContracts(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    // Set any additional headers if needed

    return this.http.post('http://localhost:8080/api/contract/upload-data', formData, { headers });
  }
  uploadFileFixtures(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    // Set any additional headers if needed

    return this.http.post('http://localhost:8080/api/match/upload-data', formData, { headers });
  }
  uploadFileStats(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    // Set any additional headers if needed

    return this.http.post('http://localhost:8080/api/stats/upload-data', formData, { headers });
  }
}
