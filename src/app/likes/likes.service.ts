import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Likes } from '../models/likes';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  baseUrl = 'https://pizzaria-fasam.herokuapp.com/avaliacao/';
  constructor(private http: HttpClient) {


  }

  httpOptions = {   
    
    headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' ,
    'Authorization': `JWT ${window.sessionStorage.getItem("access")}`
  }),
  
    
  }
   async createAvaliacao(likes: any){
      const result = await this.http.post<any>(this.baseUrl,likes,
        { headers: this.httpOptions.headers}).toPromise();
        return result;

  }


/*   createAvaliacao(likes): Observable<any> {
    return this.http.post(
      this.baseUrl,
      likes,
      { headers: this.httpOptions.headers }
    ); */
   /*  return this.http.post(
      this.baseUrl,
      likes,
      { headers: this.httpOptions.headers }
    ); */

  //};
}
