import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-confimacao-pedido',
  templateUrl: './confimacao-pedido.component.html',
  styleUrls: ['./confimacao-pedido.component.css']
})
export class ConfimacaoPedidoComponent implements OnInit {
  pizza = {
    id: window.localStorage.getItem('pizza-id'),
    nome: window.localStorage.getItem('pizza-nome'),
    codigo: window.localStorage.getItem('pizza-codigo'),
    ingrediente: window.localStorage.getItem('pizza-ingrediente'),
    preco: window.localStorage.getItem('pizza-preco'),
    descricao:window.localStorage.getItem('pizza-descricao'),
  };

  constructor( 
    private router: Router,
    ) { }

  ngOnInit(): void {
   
  }

  async confirmarPedido(){
    if(this.pizza.id != null && this.pizza.id != ""){
      this.router.navigate(['pedido-endereco'])
      
    }else{
      window.alert('Selecione a pizza desejada!');
      this.router.navigate(['pizzas'])
    }
  }

}
