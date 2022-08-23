import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productlist :product[] | any;
  pricemax: number | any;
  images='../assets/img-site/food/IMG-20211015-WA0005.jpg'
  images1='../assets/img-site/food/pngegg (32).png'
  images2='../assets/img-site/food/pngegg (30).png'
  images3='../assets/img-site/food/pngegg (37).png'
  constructor() { }

  ngOnInit(): void {

  }
  

}
