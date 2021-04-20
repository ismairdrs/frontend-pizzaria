import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  like = {
    id_usuario: localStorage.getItem('user'),
    id_pizza: '',
    id_pedido: '',
    nota: 0,
    comentario: '',
  }

constructor(private api: ApiService,) { }

  ngOnInit(): void {
  }

  novoLike(){
    this.api.createAvaliacao(this.like).subscribe(
      data => {
        console.log(data);
      },
      error =>{
        console.log('Erro: ', error.message);
      }
    )
  }
}
