import { Routes } from '@angular/router';
import { CartComponent } from './componentes/cart/cart.component';
import { DetailsComponent } from './componentes/details/details.component';
import { ViewComponent } from './componentes/view/view.component';

export const routes: Routes = [
  { path: 'view', component: ViewComponent },
  { path: '', component: DetailsComponent },
  { path: 'cart', component: CartComponent }
];
