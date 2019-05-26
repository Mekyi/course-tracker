import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseCommService {

  protected API_URL = 'http://localhost:3000/v1/api';

  constructor(protected httpClient: HttpClient) { }

  protected async postRequest(uri: any, body: any): Promise<any> {
    return await this.httpClient.post(`${this.API_URL}/${uri}`, body).toPromise();
  }

  protected async putRequest(uri: any, body: any): Promise<any> {
    return await this.httpClient.put(`${this.API_URL}/${uri}`, body).toPromise();
  }

  protected async deleteRequest(uri: any): Promise<any> {
    return await this.httpClient.delete(`${this.API_URL}/${uri}`).toPromise();
  }

  protected async getRequest(uri: any): Promise<any> {
    return await this.httpClient.get(`${this.API_URL}/${uri}`).toPromise();
  }
}
