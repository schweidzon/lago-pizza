import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { PizzaService } from '../../../../shared/services/pizza.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/users.model';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {


  constructor(private pizzaService: PizzaService,
    private userService:UserService,
    public router:Router) { }

    navigateByUrl(url:string) {
      this.router.navigateByUrl(url)
    }

    user?:User
    pizzaQuantity?:number

  ngOnInit(): void {    
    const userSessionStorage = sessionStorage.getItem('user');
    if(userSessionStorage) {
      this.user = JSON.parse(userSessionStorage)
    }

    this.pizzaService.cast.subscribe(pizzaQuantity=>this.pizzaQuantity = pizzaQuantity)

  }

  error = false


  buyButton() {
    if (this.user) {
      this.user
    } else {
      this.error=true

    }
  }

  pizzas:Pizza[] = this.pizzaService.getProducts()

  buyPizza(idPizza:string) {
    this.router.navigateByUrl(`buy-pizza/${idPizza}`)
  }

}
