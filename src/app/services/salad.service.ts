import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class SaladService {
url : string ='https://retoolapi.dev/udhTkG/toppings';
  constructor(private http: HttpClient) { 

  }

  getToppings(){

  return this.http.get<Topping[]>(this.url);
}

}
