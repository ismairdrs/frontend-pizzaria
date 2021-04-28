import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private enderecoService: EnderecoService,
  ) {
    this.getUserAddress();
   }

  ngOnInit(): void {
  }

  async getUserAddress(){
    try {
      const getEndereco = await this.enderecoService.getAddress(window.localStorage.getItem('user'));
    } catch (error) {
      window.alert('Erro na busca do endereço');
    }
  }

}
