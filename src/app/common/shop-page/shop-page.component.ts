import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent {
  showModal = false;
  preOrder = false;

  openRazorpayLink() {
    const url = "https://rzp.io/rzp/skyeone";
    window.open(url, '_self');
  }
}
