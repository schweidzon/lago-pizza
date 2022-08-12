import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from './pages/pizza-list/pizza-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginModule } from '../login/login.module';
import { BuyPizzaComponent } from './pages/buy-pizza/buy-pizza.component';
import { PizzaRegisterComponent } from './pages/pizza-register/pizza-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { HomeModule } from '../home/home.module';





@NgModule({
  declarations: [
    PizzaListComponent,
    BuyPizzaComponent,
    PizzaRegisterComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    ReactiveFormsModule,
    PizzasRoutingModule,
    HomeModule
    
  ],
  exports: [
    PizzaListComponent,
    PizzaRegisterComponent
    
  ]
})
export class PizzasModule { }
