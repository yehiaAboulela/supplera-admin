import { Product } from './../../shared/interfaces/product';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}
  navActive: boolean = false;

  inbox: Product[] = [];
  spam: Product[] = [];
  sent: Product[] = [];
  ngOnInit() {
    this._ProductsService.getProducts().subscribe({
      next: (res: { message: string; products: Product[] }) => {
        this.inbox = res.products.filter((cur) => !cur.reviwedByAdmin);
        this.spam = res.products.filter((cur) => cur.spam);
        this.sent = res.products.filter((cur) => cur.reviwedByAdmin);
      },
    });
  }
}
