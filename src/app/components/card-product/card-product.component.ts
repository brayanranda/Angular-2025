import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() product!: Product
  @Output() onDelete = new EventEmitter<number>()

  handleDelete() {
    this.onDelete.emit(this.product.id)
  }
}
