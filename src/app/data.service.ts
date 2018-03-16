import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class DataService {  
  
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getUser(id: number) {
    let url = this.baseUrl + '/users/1';
    return this.httpClient.get<JSON>(url);
  }
}
