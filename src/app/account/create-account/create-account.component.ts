import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    username:'',
    password: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
