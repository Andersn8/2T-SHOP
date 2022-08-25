import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcar',
  templateUrl: './productcar.component.html',
  styleUrls: ['./productcar.component.scss']
})
export class ProductcarComponent implements OnInit {
  images='../assets/img-site/food/IMG-20211015-WA0005.jpg'
  images1='../assets/img-site/food/pngegg (32).png'
  images2='../assets/img-site/food/pngegg (30).png'
  images3='../assets/img-site/food/pngegg (37).png'
  constructor() { }

  ngOnInit(): void {
  }

}
