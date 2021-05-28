import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  namePizza = window.localStorage.getItem('pizza-nome'); 
  constructor() { }

  ngOnInit(): void {
  }

}
