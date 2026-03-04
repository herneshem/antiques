import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, CartService } from '../../cart.service';


@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent {


  @Input() producto: any;
  @Output() cerrar = new EventEmitter<void>();

  cerrarMuestra() {
    this.cerrar.emit();

  }

  constructor(private CartService: CartService) { }
  //Carrito con acceso al servicio
  agregarAlCarrito() {
    // Lógica para agregar el producto al carrito
    const item: CartItem = {
      productId: this.producto.id,
      nombre: this.producto.nombre,
      precio: this.producto.precio,
      imagen: this.producto.imagen,
      cantidad: 1
    };

    this.CartService.addToCart(item);
    this.cerrarMuestra();
  }

  eliminarDelCarrito() {
     console.log("Botón eliminar pulsado", this.producto.id);
    this.CartService.remove(this.producto.id);
    this.cerrar.emit();
  }

}
