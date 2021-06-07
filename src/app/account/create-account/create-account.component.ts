import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { EmailValidateProtocol, EmailValidatorFnProtocol } from '../../adapterValidate/validations/email-validator-protocol';
import { EmailValidator } from '@angular/forms';
import { emailValidatorFnAdapter } from 'src/app/adapterValidate/validations/email-validate-fn-adapter';


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
    "username": "",
    "password": "",
  };
  /* login ={
    username: this.account.username,
    password: this.account.password

  }; */


  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  
  async onSubmit() {
    try {
      console.log(this.account.email)
      
      await this.validaEmailFN(emailValidatorFnAdapter, this.account.email);
      const result = await this.accountService.createAccount(this.account);
      window.alert('Usuário criado com sucesso');
      const login ={
        username: this.account.username,
        password: this.account.password
    
      };
      console.log(login)
      const result2 = await this.accountService.login(login);
      console.log(`Login efetuado: ${result2}`);
      const user = window.sessionStorage.getItem('user');
      this.router.navigate(['endereco']);
      
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  validaEmailFN(emailValidator: EmailValidatorFnProtocol, email: string): void {
    if (emailValidator(email)) {
      console.log('Email válido')
    } else {
      console.log('Email inválido')
    }
  
  };
}
