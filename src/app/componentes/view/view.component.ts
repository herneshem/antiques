import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { DetailsComponent } from "../details/details.component";

@Component({
  selector: 'app-view',
  standalone:true,
  imports: [FormsModule, CommonModule, DetailsComponent],
  templateUrl: './view.component.html',
  styles: ``
})
export class ViewComponent {

  selection: string[] = [];

  productos = [ { categoria: "mesas", nombre: "Mesa comedor", imagen: "/assets/mueb1.jpg",
    descripcion: "Sillas de biblioteca antiguas, con encanto clásico y estructura robusta,perfectas para lectura o decoración vintage" },
  { categoria: "sillas", nombre: "Silla biblioteca", imagen: "/assets/mueb2.jpg", 
    descripcion: "Sillas de biblioteca antiguas, con encanto clásico y estructura robusta,perfectaspara lectura o decoración vintage" },
  { categoria: "otros", nombre: "Mesita de noche", imagen: "/assets/mueb3.jpg", 
    descripcion: "Mesita de noche antigua con diseño clásico, ideal para añadir un toque vintage y elegante a tu dormitorio" }

  ];



//seleccion de productos por categoria
  toggleCat(categoria: string) {
    const index = this.selection.indexOf(categoria)

    if (index > -1) {
      this.selection.splice(index, 1);
    } else {
      this.selection.push(categoria);
    }
  }
  mostrarProducto(categoria: string) {
    return this.selection.length === 0 || this.selection.includes(categoria);
  }



// rango de precio

  minPrecio=0;
  precio=200


//Muestra el producto seleccionado

  productoSeleccionado: any = null;
}
