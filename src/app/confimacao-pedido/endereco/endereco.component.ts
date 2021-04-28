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

  address = {} as Address;
  addressClient!: Address[];

  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.getUserAddres();
  }

  confirmarEndereco(){

  }
   async getUserAddres(){
     const result = await this.enderecoService.getAddress(this.address.usuario);
     this.addressClient = result;
     console.log('addressClient '+this.addressClient);

   }
  

}
