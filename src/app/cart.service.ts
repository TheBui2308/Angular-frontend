import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = []; // Assuming each item in the cart is an object

  constructor() {}

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
  }

  // Add more methods as needed, such as removing items, updating quantities, etc.
}
