import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl = 'https://pizzaria-fasam.herokuapp.com/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(private http: HttpClient ) { }

  getAllPizzas() : Observable<any>{
    return this.http.get(
      this.baseUrl,
      {headers: this.httpHeaders}
      );
  };
}
