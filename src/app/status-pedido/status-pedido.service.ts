import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusPedidoService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'JWT '+ window.sessionStorage.getItem('access') })
  }
  
  async createPedido(pedido: any){
    console.log(pedido);
    const result = await this.httpClient.post<any>(`${environment.api}/pedido`,pedido, {headers: this.httpOptions.headers}).toPromise();
    window.localStorage.setItem('pedido_id',result.id);
    return result.data;
  }
   async sendInfoWebsocket(id: String){
    const result = await this.httpClient.get<any>(`${environment.api}/pedido/websocket/?id=`+id).toPromise();
    var data = result.json();
    console.log(data.id)
    return result;
  }
 
  /* sendInfoWebsocket(id: String): Observable<any>{
    const result = this.httpClient.get<any[]>(`${environment.api}/pedido/websocket/?id=`+id)
    console.log(result.subscribe)
    return result
    .pipe(
      retry(2),
      catchError(this.handleError))
  } */
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error('Method not implemented.');
  }

}
