import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'frontend';


  

  constructor(private api: ApiService, private router: Router){}
  
}
