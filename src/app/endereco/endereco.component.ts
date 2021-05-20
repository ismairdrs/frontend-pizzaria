import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
 /* usuario = {
    "usuario": ""
  }*/
  address = { 
    "usuario": "",   
    "rua": "",
    "complemento1": "",
    "complemento2": "",
    "cidade": "",
    "estado": "",
    "cep": "",
    "ponto_referencia": ""
  };

  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  async onSubmit() {
    const user = window.sessionStorage.getItem('user');
    this.address.usuario = user;
    try {
      
      const result = await this.enderecoService.createAddress(this.address);
      window.alert('Endereço adicionado com sucesso');
      console.log(result);
      this.router.navigate(['login']);

    } catch (error) {
      console.error(error);
      console.log(this.address);
      
      //console.log(this.address)
    }
  }
}
