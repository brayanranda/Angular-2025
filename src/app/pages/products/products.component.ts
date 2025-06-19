import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product.model';
import { ProductsService } from '../../services/products.service';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardProductComponent, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  form: FormGroup;
  products: Product[] = []
  showModalCreateProduct: boolean = false

  constructor(
    private productService: ProductsService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      image: ['']
    })
  }

  ngOnInit(): void {
    this.loadedProducts()
  }

  loadedProducts() {
    this.productService.getProducts().subscribe((data) => this.products = data)
  }

  onDeleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => this.loadedProducts());
  }

  onCreateProduct() {

  }

  handleModalCreateProduct() {
    this.showModalCreateProduct = !this.showModalCreateProduct;
  }

}
