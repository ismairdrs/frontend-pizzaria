import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pizzas } from '../models/pizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  BaseUrl = "https://pizzaria-fasam.herokuapp.com/pizza/";

  constructor(private httpClient: HttpClient) { }

    // Headers    
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    // Get all Pizzas
    getPizzas(): Observable<Pizzas[]>{
      return this.httpClient.get<Pizzas[]>(this.BaseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
    }
    // get Pizzas by Id
    getPizzaById(id: number): Observable<Pizzas> {
      return this.httpClient.get<Pizzas>(this.BaseUrl + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }


    // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
  
}
