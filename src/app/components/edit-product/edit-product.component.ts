import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../shared/services/products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private FormBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}
  @Input() productId: number = 0;
  @Output() exitWindow: EventEmitter<boolean> = new EventEmitter(true);
  product: any = null;
  images: string[] = [];
  currentImg = 0;
  confirmSpinner: boolean = false;
  deleteSpinner: boolean = false;

  editBody: FormGroup = {} as FormGroup;

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (res) => {
        this.product = res.products[this.productId];
        this.images = res.products[this.productId].src;
        /* edit form body */
        this.editBody = this.FormBuilder.group({
          stock: [
            res.products[this.productId].stock,
            [Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
          ],
          brand: [res.products[this.productId].brand],
          category: [res.products[this.productId].category],
          price: [
            res.products[this.productId].price,
            [Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
          ],
          status: ['private'],
        });
        /* edit form body */
      },
    });
  }

  /*   editBody: FormGroup = this.FormBuilder.group({
    stock: [this.product.stock, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    brand: [this.product.brand],
    category: [this.product.category],
    price: [this.product.price, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  }); */
  exit(): void {
    this.exitWindow.emit(false);
  }
  changeImg(index: number) {
    this.currentImg = index;
  }

  editProduct() {
    let productEditBody = this.editBody.value;
    if (productEditBody.status) {
      productEditBody.status = 'public';
    } else {
      productEditBody.status = 'private';
    }
    this.confirmSpinner = true;
    this._ProductsService
      .editProduct(productEditBody, this.product.id)
      .subscribe({
        next: (res: any) => {
          this.toastr.success('Product has updated successfuliy', 'success');
          this.product = res.updateProduct;
          this.confirmSpinner = false;
        },
      });
  }
  deleteProduct(id: string) {
    console.log(id);
    this.deleteSpinner = true;
    this._ProductsService.deleteProduct(id).subscribe({
      next: (res) => {
        this.toastr.success('Product has deleted successfuliy', 'success');
        this.deleteSpinner = false;
      },
    });
  }
}
