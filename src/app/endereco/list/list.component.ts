import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../endereco.service';
import { Address } from '../../models/address'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  address = {} as Address;
  addresss!: Address[];

  constructor(
    private router: Router,
    private enderecoService: EnderecoService,
  ) {
    this.getAddress();
  }
  loading = true;
  async ngOnInit() {
    this.getAddress();


  }

  async getUserAddress() {
    try {
      const getEndereco = await this.enderecoService.getAddress(window.sessionStorage.getItem('user'));



    } catch (error) {
      window.alert('Erro na busca do endereço');
    }
  }

  getAddress() {
    this.enderecoService.getAllAddress(window.sessionStorage.getItem('user')).subscribe((addresss: Address[]) => {
      this.addresss = addresss;
    });
  };

  setData(adres: Address) {
    window.localStorage.setItem('endereco_id', adres.id);
    window.localStorage.setItem('rua', adres.rua);
    window.localStorage.setItem('complemento1', adres.complemento1);
    window.localStorage.setItem('cidade', adres.cidade);
    window.localStorage.setItem('estado', adres.estado);
    window.localStorage.setItem('cep', adres.cep);

  }
  ruaEndereco: String;

  async confirmAddress() {
    this.ruaEndereco = window.localStorage.getItem('rua');
    if (!this.ruaEndereco) {
      window.alert('Selecione o endereço de entrega')
    } else {
      this.router.navigate(['status'])
    }

  }
  atualizarAddress() {
    this.ruaEndereco = window.localStorage.getItem('rua');
    if (!this.ruaEndereco) {
      window.alert('Selecione o endereço que deseja Atualizar')
    } else {
      window.alert('Função indisponível no momento')
      this.router.navigate(['status'])
    }

  }


}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

