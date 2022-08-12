import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/shared/services/pizza.service';

@Component({
  templateUrl: './pizza-register.component.html',
  styleUrls: ['./pizza-register.component.scss']
})
export class PizzaRegisterComponent implements OnInit {

  pizzaQuantity?:number

  productForm = new FormGroup({
    name: new FormControl('' , [Validators.required]),
    description: new FormControl('' , [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(45)]),
    imageUrl: new FormControl('', [Validators.required])
  })

  constructor(private pizzaService:PizzaService,
    private router:Router) { }

  ngOnInit(): void {
    this.pizzaService.cast.subscribe(pizzaQuantity=>this.pizzaQuantity = pizzaQuantity)
  }

  onSubmit() {
    const formValue = this.productForm.value as any
    this.pizzaService.create(formValue)
    this.router.navigateByUrl('pizza-list')
    if (this.pizzaQuantity) {
      this.pizzaService.addPizza(this.pizzaQuantity)
    }

  }

}
