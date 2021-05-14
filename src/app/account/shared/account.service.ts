import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' })
  }
  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/token/`, user).toPromise();
    if (result && result.access) {
      window.sessionStorage.setItem('access', result.access);
      window.sessionStorage.setItem('user',result.user);
      return true;
    }

    return false;
    console.log(result);
  }

  async createAccount(account: any) {  
    const result = await this.http.post<any>(`${environment.api}/usuario/`, account).toPromise();
    if (result && result.id) {      
      window.localStorage.setItem('user',result.id);
    return result;
    }
  }

  getAuthorizationToken() {
    //const token = window.localStorage.getItem('access');
    const token = window.sessionStorage.getItem('access');

    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}



function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}

