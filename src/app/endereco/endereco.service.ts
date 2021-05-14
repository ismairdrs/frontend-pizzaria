import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Address} from './../models/address'

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { 
  }
  
  
  getToken(){
  const token = window.sessionStorage.getItem("access");
  console.log(`JWT ${this.getToken()}`)
  return token;
}
  
  
  httpOptions = {   
    
    headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' ,
    'Authorization': `JWT ${window.sessionStorage.getItem("access")}`
  }),
  
    
  }

  async createAddress(address: any) {
    const result = await this.http.post<any>(`${environment.api}/endereco`,address).toPromise();
    return result;
  }
  async getAddress(userID: String){ 
   console.log(`${environment.api}/endereco/?usuario=${userID}`,'JWT ',window.sessionStorage.getItem("access"));

    const result = await this.http.get<any[]>(
      `${environment.api}/endereco/?usuario=${userID}`,
      {headers: this.httpOptions.headers}).toPromise();  
      
   console.log('address: '+ result);

  if (result) {      
     // window.sessionStorage.setItem('address',result);
     window.localStorage.setItem('endereco_id',result[result.length-1].id);      
      window.localStorage.setItem('rua',result[result.length-1].rua);
      window.localStorage.setItem('complemento1',result[result.length-1].complemento1);
      window.localStorage.setItem('cidade',result[result.length-1].cidade);
      window.localStorage.setItem('cep',result[result.length-1].cep);
      window.localStorage.setItem('ponto_referencia',result[result.length-1].ponto_referencia);
      window.localStorage.setItem('estado',result[result.length-1].estado);   
    }
    return result;
    
  }
  

  getAllAddress(userID: String): Observable<any[]>{
    return this.http.get<Address[]>(
    `${environment.api}/endereco/?usuario=${userID}`,
    this.httpOptions)
    .pipe(      
      retry(2),
      catchError(this.handleError))
    
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any[], any> {
    throw new Error('Method not implemented.');
  }
  
}
