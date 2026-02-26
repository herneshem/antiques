import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent {

  @Input () producto: any;
  @Output () cerrar = new EventEmitter<void>();

  cerrarMuestra(){
    this.cerrar.emit();
  }
}
