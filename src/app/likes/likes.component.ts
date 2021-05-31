import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes = {
    nota: '',
    comentario: ''
  };
  namePizza = window.localStorage.getItem('pizza-nome');
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    /*  if(this.likes.nota < 0 || this.likes.nota > 5 ){ */
    if (!(typeof this.likes.nota == "number")) {
      window.alert("Not a number");
      
    }
    else if(this.likes.nota < 0 || this.likes.nota > 5 ){
      window.alert('Digite um valor entre 0 a 5')

    }

  }


}
