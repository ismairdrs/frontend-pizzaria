import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
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
    setTimeout(() => { this.router.navigate(['likes']); }, 15000);

  }


}
