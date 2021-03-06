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
import {ListComponent} from './endereco/list/list.component'
import{StatusPedidoComponent} from './status-pedido/status-pedido.component'
import{EntregaPedidoComponent} from './entrega/entrega-pedido/entrega-pedido.component'
import { from } from 'rxjs';
import { LikesComponent } from './likes/likes.component';

const routes: Routes = [
 
  {path: '', 
  component: HomeComponent, 
  children:[
    {path:'pizzas', component:PizzasComponent},
    {path:'pedido', component: ConfimacaoPedidoComponent},
    {path:'pedido-endereco', component:ListComponent},
    {path:'status', component: StatusPedidoComponent},
    {path:'entrega', component: EntregaPedidoComponent},
    {path:'likes', component: LikesComponent}
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
