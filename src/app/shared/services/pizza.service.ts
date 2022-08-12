import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../../features/pizzas/models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  pizzas:Pizza[] = [
    {
      id:'1',
      name: 'Marinara',
      description: "Molho de tomate pelado italiano da casa, alho fresco fatiado, orégano, azeite de oliva extravirgem italiano e manjericão fresco orgânico ",       
      price: 45,
      imageUrl: 'assets/Marinara.jpg',
    
    },
    {
      id:'2',
      name: 'Marguerita',
      description: "Tomate pelado italiano, mozzarella de búfala fresca, parmesão tipo grana, azeite de oliva extravirgem italiano e manjericão fresco orgânico",       
      price: 45,
      imageUrl: 'assets/Margherita.jpg',
    
    },
    {
      id:'3',
      name: 'Calabrese',
      description: "Tomate pelado italiano, mozzarella de búfala, calabresa defumada, parmesão tipo grana maturado 12 meses, azeite de oliva extravirgem italiano e manjericão fresco orgânico",       
      price: 45,
      imageUrl: 'assets/Calabrese.jpg',
    
    },   
    {
      id:'4',
      name: 'Quattro formaggi',
      description: "Mozzarella de búfala fresca, ricota, gorgonzola, parmesão tipo grana maturado 12 meses, azeite de oliva extravirgem italiano e manjericão fresco orgânico",       
      price: 55,
      imageUrl: 'assets/Quattro-formaggi.jpg',
    
    },
    {
      id:'5',
      name: 'Prosciutto crudo e rucola',
      description: "Tomate pelado italiano, manjericão fresco orgânico e mozzarella de búfala fresca. Finalizada com presunto cru, rúcula, parmesão tipo grana e azeite de oliva extravirgem",       
      price: 60,
      imageUrl: 'assets/Prosciutto.jpg',
    
    },
    {
      id:'6',
      name: 'Vegan Power',
      description: "Provolone vegano, cogumelo paris, manjericão fresco orgânico, rúcula selvagem fresca, azeite de oliva extravirgem italiano e vinagrete de limão siciliano",       
      price: 70,
      imageUrl: 'assets/Vegan.jpg',
    
    }
  ]

  getProducts() {
    return this.pizzas;
  }

  create(pizza:Pizza) {
    pizza.id = this.generateNextId()
    this.pizzas.push(pizza)
  }

  generateNextId() {
    return this.pizzas[(this.pizzas.length -1)].id + 1
  }

  getById(id:string) {
    return this.pizzas.find((pizza) => pizza.id === id )
}


  private pizza = new BehaviorSubject<number>(this.pizzas.length)
  cast = this.pizza.asObservable()

  addPizza(newQuantity:number) {
    this.pizza.next(this.pizzas.length)
  }

}
