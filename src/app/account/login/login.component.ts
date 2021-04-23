import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/endereco/endereco.service';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login ={
    username: '',
    password: ''

  };

  constructor(
    private accountService: AccountService,
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  async onSubmit() {
    console.log('User '+this.login.username)
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);
      const user = window.localStorage.getItem('user');
      const getEndereco = await this.enderecoService.getAddress(user);

      // navego para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
      window.alert('Usuário e/ou senha incorreto(s)');
    }
  }

}
