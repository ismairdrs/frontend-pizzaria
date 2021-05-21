import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../endereco.service';
import {Address} from '../../models/address'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  address = {} as Address;
  addresss!: Address[];
/* 
  address = {
    usuario: '',
        rua: '',
        complemento1: '',
        complemento2: '',
        cidade: '',
        estado: '',
        cep: '',
        ponto_referencia:''
  } */

  constructor(
    private router: Router,
    private enderecoService: EnderecoService,
    ) {
       
      this.getAddress();
      //this.getUserAddress(); 
       
     // this.getUserAddress();  
   }
  loading = true;
  async ngOnInit(){
    this.getAddress();
    //this.getUserAddress();
    //this.getData();
  
  }

  async getUserAddress(){
    try {
      const getEndereco = await this.enderecoService.getAddress(window.sessionStorage.getItem('user'));
      //sleep(2000);
      
     
    } catch (error) {
      window.alert('Erro na busca do endereço');
    }
  }

  getAddress() {
    this.enderecoService.getAllAddress(window.sessionStorage.getItem('user')).subscribe((addresss: Address[]) => {
      this.addresss = addresss;
    });
   };
  
/*   async getData(){
    this.address.usuario = await window.sessionStorage.getItem('user');  
    this.address.rua = await window.localStorage.getItem('rua');
    this.address.complemento1= await window.localStorage.getItem('complemento1');
    this.address.complemento2= ""; 
    this.address.cidade= await window.localStorage.getItem('cidade'); 
    this.address.estado= await window.localStorage.getItem('estado'); 
    this.address. cep= await window.localStorage.getItem('cep'); 
    this.address.ponto_referencia= await window.localStorage.getItem('ponto_referencia'); 

    /* if(this.address.rua != null && this.address.rua != ""){
      this.router.navigate(['pedido-endereco'])
      //window.location.reload();
      

    }else{
      this.router.navigate(['pedido-endereco'])
    } *
  } */

  async confirmAddress(){
 
    this.router.navigate(['status'])
  }

}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

