import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { SaladService } from '../services/salad.service';
import { Topping } from '../models/topping.model';

@Component({
  selector: 'app-salade-bar-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss'
})
export class SaladComponent implements OnInit{
  ngOnInit(): void {
    this.saladService.getToppings().subscribe(t =>{
      this.toppings = t;
    });
  }
  orderService =inject(OrderService);
  saladService = inject(SaladService);
toppings : Topping[]= [];
toppings2$= this.saladService.getToppings();

selectTopping(topping : Topping){
  console.log(topping);
}

}
