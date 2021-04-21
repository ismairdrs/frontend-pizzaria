import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/token/`, user).toPromise();
    if (result && result.access) {
      window.localStorage.setItem('access', result.access);
      return true;
    }

    return false;
    console.log(result);
  }

 /* async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.api}/usuario/`, account).toPromise();
    return result;
  }*/

  async createAccount(account: any) {
    const result = await this.http.post<any>(`https://pizzaria-fasam.herokuapp.com/usuario/`, account).toPromise();
    return result;
    window.alert(result);
  }


  getAuthorizationToken() {
    const token = window.localStorage.getItem('access');
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

