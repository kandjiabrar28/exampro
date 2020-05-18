import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Centre } from '../models/centre';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  private apiUrl = 'http://localhost:8080/api/v1/centres';

  constructor(private httpClient: HttpClient) { }

  getCentre(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  getCentresList(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`);
  }

  deleteCentre(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  save(centre: Centre) {
    return this.httpClient.post<Centre>(this.apiUrl, centre);
  }
}
