import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { DetailsComponent } from "../details/details.component";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [FormsModule, CommonModule, DetailsComponent],
  templateUrl: './view.component.html',
  styles: ``
})
export class ViewComponent {

  selection: string[] = [];

  productos = [{
    categoria: "mesas", nombre: "Mesa comedor", imagen: "/assets/mueb1.jpg",
    descripcion: "Sillas de biblioteca antiguas, con encanto clásico y estructura robusta,perfectas para lectura o decoración vintage"
  },
  {
    categoria: "sillas", nombre: "Silla biblioteca", imagen: "/assets/mueb2.jpg",
    descripcion: "Sillas de biblioteca antiguas, con encanto clásico y estructura robusta,perfectaspara lectura o decoración vintage"
  },
  {
    categoria: "otros", nombre: "Mesita de noche", imagen: "/assets/mueb3.jpg",
    descripcion: "Mesita de noche antigua con diseño clásico, ideal para añadir un toque vintage y elegante a tu dormitorio"
  },
  {
    categoria: "mesas",
    nombre: "Mesa de centro",
    imagen: "/assets/mesanoche.png",
    descripcion: "Mesa de centro de madera maciza con acabado rústico, perfecta para salas con estilo clásico o industrial"
  },
  {
    categoria: "mesas",
    nombre: "Mesa auxiliar",
    imagen: "/assets/auxiliar.jpg",
    descripcion: "Mesa auxiliar compacta y elegante, ideal para espacios pequeños o como complemento decorativo"
  },
  {
    categoria: "sillas",
    nombre: "Silla mecedora",
    imagen: "/assets/mecedora.jpg",
    descripcion: "Silla mecedora de madera con diseño tradicional, cómoda y perfecta para momentos de descanso"
  },
  {
    categoria: "sillas",
    nombre: "Silla tapizada",
    imagen: "/assets/tapizada.jpg",
    descripcion: "Silla tapizada con asiento acolchado y estructura resistente, ideal para comedor o sala de estar"
  },
  {
    categoria: "otros",
    nombre: "Cómoda antigua",
    imagen: "/assets/cómoda.jpg",
    descripcion: "Cómoda de estilo vintage con amplios cajones, perfecta para organizar y decorar cualquier habitación"
  },
  {
    categoria: "otros",
    nombre: "Espejo decorativo",
    imagen: "/assets/espejo.jpg",
    descripcion: "Espejo decorativo con marco de madera tallada, aporta elegancia y amplitud visual a cualquier espacio"
  }

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

  minPrecio = 0;
  precio = 200


  //Muestra el producto seleccionado

  productoSeleccionado: any = null;

  seleccionarProducto(producto: any) {
  this.productoSeleccionado = producto; // se asigna solo al click
}
}
