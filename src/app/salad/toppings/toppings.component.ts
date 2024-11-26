import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.scss'
})
export class ToppingsComponent {
  @Input()
  toppings : Topping[] =[];

  chooseTopping(event: MatSelectionListChange){
   const topping = <Topping>event.source.selectedOptions.selected[0].value;
    console.log(topping.name, " chosen");
    this.selectTopping.emit(topping);
  }
  @Output()
  selectTopping = new EventEmitter<Topping>();

}
