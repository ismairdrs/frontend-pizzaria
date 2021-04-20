import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'frontend';


  

  constructor(private api: ApiService, private router: Router){}
  
  usuario_logado = localStorage.getItem('user');

  endereco(){
    this.router.navigate(['/endereco']);
  };

  likes(){
    this.router.navigate(['/like']);
  }

  usuario(){
    this.router.navigate(['/usuario']);
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login']);
    window.location.reload();
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }
}
