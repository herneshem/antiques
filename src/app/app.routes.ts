import { Routes } from '@angular/router';
import { CartComponent } from './componentes/cart/cart.component';
import { DetailsComponent } from './componentes/details/details.component';
import { ViewComponent } from './componentes/view/view.component';

export const routes: Routes = [
 { path: '', component: ViewComponent },   // Página inicial
  { path: 'details', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
