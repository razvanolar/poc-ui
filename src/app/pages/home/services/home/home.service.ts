import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) {

  }

  public getTests(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/v1/tests', {
      withCredentials: true
    });
  }
}
