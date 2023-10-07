import {Injectable} from "@angular/core";
import {IMainData} from "../models/maindata.interface";


@Injectable({ providedIn: 'root' })
export class CartService {

  getFromLocalStorage(): IMainData[] {
    const cartItems = localStorage.getItem('cart_items');
    return cartItems ? JSON.parse(cartItems) : []
  }

  addToCart(item: IMainData) {
    const cartItems = this.getFromLocalStorage();
    console.log(cartItems)
    cartItems.push(item);
    localStorage.setItem('cart_items', JSON.stringify(cartItems));
  }
}
