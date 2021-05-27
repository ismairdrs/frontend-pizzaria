import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { PizzasComponent} from './pizzas/pizzas.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { ConfimacaoPedidoComponent } from './confimacao-pedido/confimacao-pedido.component';
import { ListComponent } from './endereco/list/list.component';
import { StatusPedidoComponent } from './status-pedido/status-pedido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntregaPedidoComponent } from './entrega/entrega-pedido/entrega-pedido.component';
import { LikesComponent } from './likes/likes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    HomeComponent,
    PizzasComponent,
    EnderecoComponent,
    ConfimacaoPedidoComponent,
    ListComponent,
    StatusPedidoComponent,
    EntregaPedidoComponent,
    LikesComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    //MatProgressBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
