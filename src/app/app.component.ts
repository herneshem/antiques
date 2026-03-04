import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ViewComponent } from "./componentes/view/view.component";
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ecomerce';

    //conectar con servcio

  cartCounter: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cardCounter$.subscribe(count => {
      this.cartCounter = count;
    });
  }
}
