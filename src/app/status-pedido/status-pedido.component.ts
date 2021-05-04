import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-pedido',
  templateUrl: './status-pedido.component.html',
  styleUrls: ['./status-pedido.component.css']
})
export class StatusPedidoComponent implements OnInit {
  message: String;


  constructor() { 
    this.message = "Pedido saiu para entrega"
  }

  ngOnInit(): void {
  }

}
