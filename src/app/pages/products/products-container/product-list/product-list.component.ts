import { Component, Input, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonServiceService } from 'src/app/common-service.service';
import { ModalComponent } from 'src/app/resuable/modal/modal.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  } = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 },
  };

  imageUrl =
    'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  sanitizedImageUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer,private offcanvasService: CommonServiceService) {}

  ngOnInit() {
    this.sanitizedImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.imageUrl
    );
  }

  //? Product Logic
  /*
  product = {
    name: 'Iphone 13',
    color: 'Mate Black',
    price: 789,
    discount_price: 9.5,
    instock: 10,
  };
  */

  addToCart: number = 0;

  //? Discount Logic
  /*
  getDiscountedPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discount_price) / 100
    );
  }
  */

  onDecrement() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  onIncrement() {
    if (this.addToCart < this.product.rating.count) {
      this.addToCart++;
    }
  }

  title = "Product List";

  openOffcanvas(content:TemplateRef<any>): void {
    this.offcanvasService.openEnd(content)  }
}
