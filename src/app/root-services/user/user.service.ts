import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInfo: any = undefined;

  private _userInfo: BehaviorSubject<any> = new BehaviorSubject(this.userInfo);

  constructor(private httpClient: HttpClient) { }

  public refreshToken(): Observable<any> {
    console.log('--- executing refresh token')
    return this.httpClient.get('http://localhost:8080/api/test/user/refresh', {
      withCredentials: true
    });
  }

  public login(): Observable<any> {
    let headers = new HttpHeaders();
    // headers.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    return this.httpClient.post('http://localhost:8080/api/v1/login', {
      username: 'test',
      password: 'test'
    }, {
      withCredentials: true,
      headers: headers
    });
  }

  public handleUserStateResult(result: any): void {
    if (!result || Object.keys(result).length !== 0) {
      console.log('handle user state result', result);
      this.userInfo = result;
      this._userInfo.next(this.userInfo);
    }
  }

  public handleLoginResult(result: any): void {
    if (!result || Object.keys(result).length !== 0) {
      console.log('handle user login result', result);
      this.userInfo = result;
      this._userInfo.next(this.userInfo);
    }
  }

  public userInfoObservable(): Observable<any> {
    return this._userInfo.asObservable();
  }
}
