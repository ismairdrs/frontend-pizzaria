import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';
import { Likes } from '../models/likes'
import { LikesService } from './likes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  //likes = {} as Likes;
  likes = {
    id_usuario: window.sessionStorage.getItem('user'),
    id_pizza: window.localStorage.getItem('pizza-id'),
    id_pedido: window.localStorage.getItem('pedido_id'),
    nota: '',
    comentario: '',

  }


  namePizza = window.localStorage.getItem('pizza-nome');
  constructor(private likesService: LikesService, private router: Router) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    if (!(typeof this.likes.nota == "number")) {
      window.alert("Not a number");

    }
    else if (this.likes.nota < 0 || this.likes.nota > 5) {
      window.alert('Digite um valor entre 0 a 5')

    } else {
      try {
        const result = await this.likesService.createAvaliacao(this.likes);
        console.log(result);
        console.log(this.likes);
        this.router.navigate(['pizzas']);

      } catch (error) {
        console.error(error);
        console.log(this.likes);
      }

      /* window.alert(this.likes.nota)
      window.alert(this.likes.comentario)     */


    }

  }


}
