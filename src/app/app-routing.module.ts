import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './features/aboutus/pages/aboutus/aboutus.component';
import { LocationComponent } from './features/location/pages/location/location.component';
//import { LoginComponent } from './features/login/pages/login/login.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { BuyPizzaComponent } from './features/pizzas/pages/buy-pizza/buy-pizza.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},  
  {path:'home', loadChildren: () => import ('./features/home/home.module').then(m => m.HomeModule)}, 
  {path:'', loadChildren: () => import ('./features/pizzas/pizzas.module').then(m => m.PizzasModule)},
  {path:'login', loadChildren: () => import ('./features/login/login.module').then(m => m.LoginModule)},
  {path:'about-us', component:AboutusComponent},
  {path:'location', component:LocationComponent},
  {path:'signup', loadChildren: () => import ('./features/signup/signup.module').then(m => m.SignupModule)}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
