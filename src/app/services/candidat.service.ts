import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidat } from '../models/candidat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {


  private apiUrl = 'http://localhost:8080/api/v1/listcandidats';
  private candidatUrl = 'http://localhost:8080/api/v1/addcandidat';

  constructor(private httpClient: HttpClient) { }

  getCandidat(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  getCandidatsList(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`);
  }

  deleteCandidat(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // tslint:disable-next-line:ban-types
  create(candidat: Object): Observable<Object> {
    return this.httpClient.post(`${this.apiUrl}`, candidat);
  }

}
