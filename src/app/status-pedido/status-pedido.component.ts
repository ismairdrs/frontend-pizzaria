import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusPedidoService } from './status-pedido.service';

@Component({
  selector: 'app-status-pedido',
  templateUrl: './status-pedido.component.html',
  styleUrls: ['./status-pedido.component.css']
})
export class StatusPedidoComponent implements OnInit {
  message: String;

  pedido = {
    "usuario_id": "",
    "endereco_id": "",
    "pizza_id": ""
  };

  id="";


  constructor(
    private statusPedidoService: StatusPedidoService,
    private router: Router
  ) { 
    /* this.message = "Pedido saiu para entrega" */
    
    
  }

   ngOnInit() {
     this.onsubmit();
    
  }
 
  async onsubmit(){
    const user = window.sessionStorage.getItem('user');
    this.pedido.usuario_id = user;

    const endereco_id = window.localStorage.getItem('endereco_id');
    this.pedido.endereco_id = endereco_id;

    const pizza_id = window.localStorage.getItem('pizza-id');
    this.pedido.pizza_id = pizza_id;

    try {
      const result = await this.statusPedidoService.createPedido(this.pedido).then;
      console.log('pedido criado com sucesso');
/*       const resultadoJson = JSON.stringify(result)
      console.log(resultadoJson['id']);
       */
    
        const sendInfoWebsocket = await this.statusPedidoService.sendInfoWebsocket(window.localStorage.getItem('pedido_id'));
        console.log('sendInfoWebsocket: ' + sendInfoWebsocket); 
        
        const sendInfoWebsocket1 = await this.statusPedidoService.sendInfoWebsocket(window.localStorage.getItem('pedido_id'));
        console.log('sendInfoWebsocket1: ' + sendInfoWebsocket); 
      
      
      
    } catch (error) {
      console.log(error);      
    }
    
  }
  

}
