import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusPedidoService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'JWT '+ window.localStorage.getItem('access') })
  }
  
  async createPedido(pedido: any){
    console.log(pedido);
    const result = await this.httpClient.post<any>(`${environment.api}/pedido`,pedido, {headers: this.httpOptions.headers}).toPromise();
    return result;
  }

}
