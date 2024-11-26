import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-salade-bar-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orderForm : FormGroup;

  constructor(
    private fb:FormBuilder, 
    private orderService: OrderService,
    private router: Router
  ){
    this.orderForm = fb.group({
      name:['', Validators.required],
      tel:['', [Validators.required, Validators.pattern('^0[6-7][0-9]{8}$')]]
    });
  }
 get nameControl(){
   return this.orderForm.get('name')!;
  }
get telControl(){
  return this.orderForm.get('tel');
}
startOrder(){
  if(this.orderForm.valid){
    this.orderService.name = this.orderForm.value.name;
    this.orderService.tel = this.orderForm.value.tel;
    this.router.navigate(['salad']);
  }
}
}
