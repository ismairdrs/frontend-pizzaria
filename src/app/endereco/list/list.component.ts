import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../endereco.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  address = {
    usuario: window.sessionStorage.getItem('user'),  
        rua: window.localStorage.getItem('rua'),
        complemento1: window.localStorage.getItem('complemento1'),
        complemento2: "",
        cidade: window.localStorage.getItem('cidade'),
        estado: window.localStorage.getItem('estado'),
        cep: window.localStorage.getItem('cep'),
        ponto_referencia: window.localStorage.getItem('ponto_referencia')
  }

  constructor(
    private router: Router,
    private enderecoService: EnderecoService) {
      
      this.getUserAddress();  
   }

  ngOnInit(): void {
  }

  async getUserAddress(){
    try {
      const getEndereco = await this.enderecoService.getAddress(window.sessionStorage.getItem('user'));
    } catch (error) {
      window.alert('Erro na busca do endereço');
    }
  }

  confirmAddress(){
    this.router.navigate(['status'])
  }

}
