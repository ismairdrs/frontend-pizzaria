import { Component, OnInit } from '@angular/core';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
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
    private enderecoService: EnderecoService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.enderecoService.createAddress(this.address);
      window.alert('Usuário criado com sucesso');

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
