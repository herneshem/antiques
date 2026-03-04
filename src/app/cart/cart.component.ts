import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calcularTotal();   
  }

  calcularTotal() {
    this.total = this.items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  cambiarCantidad(item: CartItem, cantidad: number) {
    if (cantidad < 1) return;
    item.cantidad = cantidad;
    this.calcularTotal();
  }

    eliminarItem(item: CartItem) {
    this.items = this.items.filter(i => i.productId !== item.productId);
    this.cartService['items'] = this.items; // actualizar servicio
    this.cartService['updateCounter']();       // actualizar contador en banner
    this.calcularTotal();
  }

  iniciarCompra() {
    alert('Redirigiendo a proceso de pago...');
    // Aquí puedes integrar el flujo real de pago (Stripe, PayPal, etc.)
  }
}
