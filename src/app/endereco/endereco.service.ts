import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' })
  }
  async createAddress(address: any) {
    const result = await this.http.post<any>(`${environment.api}/endereco`,address).toPromise();
    return result;
  }
  async getAddress(userID: String){
    //const user = window.localStorage.getItem('user');
    const result = await this.http.get<any[]>(`${environment.api}/endereco/?usuario=${userID}`).toPromise();  
   // console.log('Endereço: '+ result[result.length-1].rua);
   if (result) {      
      window.localStorage.setItem('rua',result[result.length-1].rua);
      window.localStorage.setItem('complemento1',result[result.length-1].complemento1);
      window.localStorage.setItem('cidade',result[result.length-1].cidade);
      window.localStorage.setItem('cep',result[result.length-1].cep);
      window.localStorage.setItem('ponto_referencia',result[result.length-1].ponto_referencia);
      window.localStorage.setItem('estado',result[result.length-1].estado);
    }
    return result;
    
  }
  
}
