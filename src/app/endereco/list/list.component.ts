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
    usuario: '',
        rua: '',
        complemento1: '',
        complemento2: '',
        cidade: '',
        estado: '',
        cep: '',
        ponto_referencia:''
  }

  constructor(
    private router: Router,
    private enderecoService: EnderecoService,
    ) {
       
         
      this.getUserAddress(); 
       
     // this.getUserAddress();  
   }
  loading = true;
  async ngOnInit(){
    this.getData();
    //sleep(2000); 
    this.loading = false;
  }

  async getUserAddress(){
    try {
      const getEndereco = await this.enderecoService.getAddress(window.sessionStorage.getItem('user'));
      //sleep(2000);
      
     
    } catch (error) {
      window.alert('Erro na busca do endereço');
    }
  }
  
  async getData(){
   
    this.address.usuario = window.sessionStorage.getItem('user');  
    this.address.rua = window.localStorage.getItem('rua');
    this.address.complemento1= window.localStorage.getItem('complemento1');
    this.address.complemento2= ""; 
    this.address.cidade= window.localStorage.getItem('cidade'); 
    this.address.estado= window.localStorage.getItem('estado'); 
    this.address. cep= window.localStorage.getItem('cep'); 
    this.address.ponto_referencia= window.localStorage.getItem('ponto_referencia'); 

    /* if(this.address.rua != null && this.address.rua != ""){
      this.router.navigate(['pedido-endereco'])
      //window.location.reload();
      

    }else{
      this.router.navigate(['pedido-endereco'])
    } */
  }

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

