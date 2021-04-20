import { Component, OnInit } from '@angular/core';
import { PizzasService } from './pizzas.service';
import { Pizzas } from '../models/pizzas';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizza = {} as Pizzas;
  pizzas!: Pizzas[];

  constructor(private pizzasService : PizzasService) { }
  
  ngOnInit() {
    this.getPizzas();
  };

  getPizzas() {
    this.pizzasService.getPizzas().subscribe((pizzas: Pizzas[]) => {
      this.pizzas = pizzas;
    });
   };

}
function getPizzas() {
  throw new Error('Function not implemented.');
}

