import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { EnderecoComponent } from './endereco/endereco.component' ;
import{ConfimacaoPedidoComponent} from './confimacao-pedido/confimacao-pedido.component'
import {EnderecoComponentPedido} from './confimacao-pedido/endereco/endereco.component'
import { from } from 'rxjs';

const routes: Routes = [
 
  {path: '', 
  component: HomeComponent, 
  children:[
    {path:'pizzas', component:PizzasComponent},
    {path:'pedido', component: ConfimacaoPedidoComponent},
    {path:'pedido-endereco', component:EnderecoComponentPedido}
  ],canActivate: [AuthGuard]
},
{
  path: '',
  component: AuthenticationComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'endereco', component: EnderecoComponent}    
  ]
},
{ path: '**', redirectTo: '' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
