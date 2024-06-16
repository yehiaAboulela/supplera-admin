import { InboxService } from './../../shared/services/inbox.service';
import { Product } from './../../shared/interfaces/product';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private InboxService: InboxService
  ) {}
  navActive: boolean = false;

  inbox: Product[] = [];
  spam: Product[] = [];
  sent: Product[] = [];
  ngOnInit() {
    this._ProductsService.getProducts().subscribe({
      next: (res: { message: string; products: Product[] }) => {
        this.InboxService.inboxData.next(res.products);

        this.InboxService.inboxData.subscribe({
          next: (data) => {
            this.inbox = data.filter((cur) => !cur.reviwedByAdmin);
          },
        });

        this.InboxService.inboxData.subscribe({
          next: (data) => {
            this.spam = data.filter((cur) => cur.spam);
          },
        });

        this.InboxService.inboxData.subscribe({
          next: (data) => {
            this.sent = data.filter((cur) => cur.reviwedByAdmin);
          },
        });
      },
    });
  }
}
