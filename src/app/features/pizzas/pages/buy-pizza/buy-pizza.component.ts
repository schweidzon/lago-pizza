import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from 'src/app/shared/services/pizza.service';
import { Pizza } from '../../models/pizza.model';

@Component({
  templateUrl: './buy-pizza.component.html',
  styleUrls: ['./buy-pizza.component.scss']
})
export class BuyPizzaComponent implements OnInit {

  pizza?:Pizza

  constructor(private activedRoute:ActivatedRoute,
    private pizzaService:PizzaService,
    public router:Router) { }

    navigateByUrl(url:string) {
      return this.router.navigateByUrl(url)
    }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params)=> {
      const id = params['pizzaId'] 
      this.pizza = this.pizzaService.getById(id) 
         
    
    })
    
    
  }

    
   

  

  date = new Date()

  buyPizza(idPizza:string) {
    this.router.navigateByUrl(`buy-pizza/${idPizza}`)
    
    
  }

}
