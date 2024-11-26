import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

const routes: Routes = [

  {
    path:'kitchen',
    loadChildren:()=> import('./kitchen/kitchen.module').then(m=>m.KitchenModule)
  },
  {
    path:'',
    component:OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
