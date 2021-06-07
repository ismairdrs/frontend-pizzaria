import { Component, OnInit } from '@angular/core';
import { PizzasService } from './pizzas.service';
import { Pizzas } from '../models/pizzas';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../state/order';
import { OrderPending } from '../state/order-pending';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizza = {} as Pizzas;
  pizzas!: Pizzas[];

  constructor(
    private pizzasService : PizzasService,
    private router: Router) { }
  
  ngOnInit() {
    this.getPizzas();
  };

  getPizzas() {
    this.pizzasService.getPizzas().subscribe((pizzas: Pizzas[]) => {
      this.pizzas = pizzas;
    });
   };

   buyPizza(pizza: any) {     
    this.pizzasService.getPizzaById(pizza.id);
    window.localStorage.setItem('pizza-id',pizza.id);
    window.localStorage.setItem('pizza-nome',pizza.nome);
    window.localStorage.setItem('pizza-codigo',pizza.codigo);
    window.localStorage.setItem('pizza-ingrediente',pizza.ingrediente);
    window.localStorage.setItem('pizza-preco',pizza.preco);
    window.localStorage.setItem('pizza-descricao',pizza.descricao);

    const order = new Order();
    order.pedidoCriado();
   /*  order.pedidoCaminho() */
    console.log('IdPizza '+pizza.id)
    this.router.navigate(['pedido']);



    
   };

   /*async onSubmit() {
    try {
      console.log(this.pizza.id );      
    } catch (error) {
      console.log(error);
    }
  }*/


}


function getPizzas() {
  throw new Error('Function not implemented.');
}

