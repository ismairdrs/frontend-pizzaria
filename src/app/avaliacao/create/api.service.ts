import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // a avaliação vai ser feita usando o rabbitmq

  // id usuario, id pizza, id pedido, nota, comentario
  // mostrar para o usuário apenas o campo de nota e comentário
  
  baseUrl = 'https://pizzaria-fasam.herokuapp.com/avaliacao/';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'JWT ' + localStorage.getItem('token_access')
  })
  
  constructor(private http: HttpClient ) { }

  createAvaliacao(avaliacao) : Observable<any>{
    return this.http.post(
      this.baseUrl,
      avaliacao,
      {headers: this.httpHeaders}
      );
  };
}
