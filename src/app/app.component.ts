import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewComponent } from "./componentes/view/view.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomerce';
}
