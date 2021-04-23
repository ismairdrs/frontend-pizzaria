import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account = {
    "first_name": "",
    "last_name": "",
    "phone_number": "",
    "email": "",
    "username":"",
    "password": "",
  };
 

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);
      window.alert('Usuário criado com sucesso');
      this.router.navigate(['endereco']);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
