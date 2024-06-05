import { Product } from './../../../shared/interfaces/product';
import { ProductsService } from './../../../shared/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css'],
})
export class SentComponent {
  constructor(private _ProductsService: ProductsService) {}
  products: Product[] = [];
  detailsProduct: number = 0;
  detailsActive: boolean = false;
  currentImg = 0;
  searchTerm = '';
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (res: { message: string; products: Product[] }) => {
        this.products = res.products.filter((cur) => cur.reviwedByAdmin);
      },
    });
  }

  openDetails(index: number) {
    this.detailsProduct = index;
    this.detailsActive = true;
  }
  changeImg(index: number) {
    this.currentImg = index;
  }
}
