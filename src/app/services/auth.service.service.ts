import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetRequestTokenResponse } from '../models/create-token.interface';
import { CreateSessionResponse } from '../models/create-session.interface';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  getRequestToken(): Observable<GetRequestTokenResponse> {
    return this.http.get<GetRequestTokenResponse>(`${environment.baseUrl}/authentication/token/new?${environment.apikey}`);
  }
  createSession(token: string): Observable<CreateSessionResponse> {
    console.log(token);
    return this.http.post<CreateSessionResponse>(`${environment.baseUrl}/authentication/session/new?${environment.apikey}`,
      {
        request_token: token
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
