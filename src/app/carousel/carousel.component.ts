import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {

 showNavigationArrows = false;
  showNavigationIndicators = false;
  images: any[] = [
    "assets/slide-imgf/portfolio_06.jpg",
    "assets/slide-imgf/wallpaperflare.com_wallpaper (1).jpg",
    "assets/slide-imgf/inner-bg.jpg",
    "assets/slide-imgf/portfolio_03.jpg",
    "assets/slide-imgf/pop.jpg",
    "assets/slide-imgf/wre.jpg",
    "assets/slide-imgf/ge.jfif"
  ];
 constructor(config: NgbCarouselConfig) {
  // customize default values of carousels used by this component tree
  config.showNavigationArrows = true;
  config.showNavigationIndicators = true;
}

  ngOnInit(): void {

  }

}
