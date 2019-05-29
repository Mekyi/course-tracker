import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseCommService {

  protected API_URL = 'http://niisku.lamk.fi/~Mikael17001/serverside19/CourseTrackerRest';

  constructor(protected httpClient: HttpClient) { }

  protected postRequest(uri: any, body: any): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/${uri}`, body);
  }

  protected putRequest(uri: any, body: any): Observable<any> {
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(`${this.API_URL}/${uri}`, body);
  }

  protected deleteRequest(uri: any): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${uri}`);
  }

  protected getRequest(uri: any): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/${uri}`);
  }
}
