import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
 
  {path: '', 
  component: HomeComponent, 
  children:[
    {path:'pizzas', component:PizzasComponent},
  ],canActivate: [AuthGuard]
},
{
  path: '',
  component: AuthenticationComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'create-account', component: CreateAccountComponent }
  ]
},
{ path: '**', redirectTo: '' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
