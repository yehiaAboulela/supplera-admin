import { ProductsService } from './../../shared/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private _ProductsService: ProductsService) {}
  products: any[] = [];

  currentProduct: number = 0;
  editProductActive: boolean = false;

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        console.log(response);
      },
    });
  }

  viewProductEdit(id: number): void {
    this.currentProduct = id;
    this.editProductActive = true;
    console.log(321);
  }
  exitWindow(event: boolean) {
    this.editProductActive = false;
  }
}
