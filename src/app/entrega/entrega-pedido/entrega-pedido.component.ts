import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Order } from 'src/app/state/order';
@Component({
  selector: 'app-entrega-pedido',
  templateUrl: './entrega-pedido.component.html',
  styleUrls: ['./entrega-pedido.component.css']
})
export class EntregaPedidoComponent implements OnInit {
  menssage = "Entrega Finalizada"
 
  
  
  constructor(private router: Router) { 

  }


  ngOnInit(): void {
    const order =  new Order();
    order.pedidoEntregue();
    setTimeout(() => { this.router.navigate(['likes']); }, 1000);

  }


}
