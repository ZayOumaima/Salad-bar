import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { inject } from '@angular/core';

export const saladGuard: CanActivateFn = () => {
  const orderService = inject(OrderService);
  const router =inject(Router);
  if(orderService.name && orderService.tel){
    return true;
  }
router.navigate(['/']);
return false;
};
