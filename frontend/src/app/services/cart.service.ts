import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage(); //return new Cart or information
  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id == food.id);
    if(cartItem)
    return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId:string):void{
    this.cart.items=this.cart.items
    .filter(item=>item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId:string,quantity:number){
    let cartItem = this.cart.items
    .find(item => item.food.id === foodId);
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price=quantity*cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
    //send it as observable because if we sent the subject could able to change the value from the subject outside of the cart service
    //any changes inside to the cart shoul happen inside the cart
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum,currentItem) => prevSum + currentItem.price,0) //start to call this method based on number of items that you have
    //inside items and have the total price of all items
    this.cart.totalCount = this.cart.items
    .reduce((prevSum,currentItem) => prevSum+currentItem.quantity,0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);

    this.cartSubject.next(this.cart); //notify all the listeners of the cart observable
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson) : new Cart();
  }

  getCart():Cart{
    return this.cartSubject.value; //the subject always keep the latest values
  }

}
