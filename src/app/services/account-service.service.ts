import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from '../models/list-interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<ListResponse> {
    let session_id = localStorage.getItem('SESSION_ID');
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<ListResponse>(`${environment.baseUrl}/account/${user_id}/lists?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }

  createList(name: string, description: string): Observable<any> {
    let session_id = localStorage.getItem('SESSION_ID');
    return this.http.post<any>(`${environment.baseUrl}/list`, {
      name: name,
      description: description,
      language: "en"
    }, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`,
        'content-type': 'application/json'
      }
    })
  }
}
