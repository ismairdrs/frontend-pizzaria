import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Address} from './../../models/address'
import {EnderecoService} from '../../endereco/endereco.service'

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponentPedido implements OnInit {
  /*address = { 
    "usuario": window.localStorage.getItem('user'),   
    "rua": "",
    "complemento1": "",
    "complemento2": "",
    "cidade": "",
    "estado": "",
    "cep": "",
    "ponto_referencia": ""
  };*/
  address = {} as Address;
  addresss!: Address[];

  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  confirmarEndereco(){

  }
  async getUserAddress(){
    const result = await this.enderecoService.getAllAddress(this.address.usuario).subscribe((addresss:Address[] ) => {
      this.addresss = addresss;
    });
   };
  

}
