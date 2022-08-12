import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent} from './pages/pizza-list/pizza-list.component';
import { BuyPizzaComponent } from './pages/buy-pizza/buy-pizza.component';
import { PizzaRegisterComponent } from './pages/pizza-register/pizza-register.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [{
  path:'pizza-list', component:PizzaListComponent
},
{
  path:'buy-pizza/:pizzaId', component:BuyPizzaComponent, canActivate: [AuthGuard]
},
{
  path:'pizza-register', component:PizzaRegisterComponent, canActivate: [AuthGuard]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
