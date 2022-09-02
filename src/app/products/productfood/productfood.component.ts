import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productfood',
  templateUrl: './productfood.component.html',
  styleUrls: ['./productfood.component.scss']
})
export class ProductfoodComponent implements OnInit {
  images='../assets/img-site/food/IMG-20211015-WA0005.jpg'
  images1='../assets/img-site/food/pngegg (32).png'
  images2='../assets/img-site/food/pngegg (30).png'
  images3='../assets/img-site/food/pngegg (37).png'

  constructor() { }

  ngOnInit(): void {
  }

}
