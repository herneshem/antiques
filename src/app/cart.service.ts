import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface CartItem {
  productId: number;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];
  private cardCounter = new BehaviorSubject<number>(0);
  cardCounter$ = this.cardCounter.asObservable();

  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i.productId === item.productId);

    if (existingItem) {
      existingItem.cantidad += item.cantidad;
    } else {
      this.items.push(item);
    }

    this.updateCounter();
  }

  remove(id: number) {
    console.log("Se está intentando eliminar:", id);
    this.items = this.items.filter(item => item.productId !== id);
    this.updateCounter();
  }

  getItems() {
    return this.items;
  }

  private updateCounter() {
    const totalItems = this.items.reduce((total, item) => total + item.cantidad, 0);
    this.cardCounter.next(totalItems);
  }

}