import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './componentes/details/details.component';
import { ViewComponent } from './componentes/view/view.component';

export const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'cart', component: CartComponent }
];
