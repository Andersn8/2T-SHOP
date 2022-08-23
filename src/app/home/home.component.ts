import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { grille } from './homes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  //****************image utilisée */
video_world="assets/video/Earth perfect loop HD gif base. May 17, 2011.mp4"
  imageblob="assets/img-site/bg-img/pngegg (37).png"
 im1 ='assets/img-site/bg-img/pngegg.png';
 img1 = "assets/shoes-img1.png";
 img2 = "assets/shoes-img2.png";
 img3 ='assets/img-site/bg-img/pngegg.png';
 img_foot =" assets/img-site/food/pngegg (24).png"
 img_mobil =" assets/img-site/vehicule/pngegg (11).png"
 img_mobil4 =" assets/img-site/vehicule/pngegg (14).png"
 img_mobil2 =" assets/img-site/vehicule/pngegg (15).png"
 img_mobil3 =" assets/img-site/vehicule/pngegg (16).png"
 img_outils =" assets/img-site/outils/pngegg (20).png"
 img_foot1 = " assets/pngegg (12).png"
 img_mobil1 =" assets/pngegg (13).png"
 img_outils1 =" assets/pngegg.png"
 img_outils11 ="assets/img-site/outils/pngegg (1).png"
 img_outilivre="assets/img-site/besoin/pngegg (5).png"
 img4 ='assets/img-site/bg-img/pngegg.png';
 img_panier='assets/pngegg (11).png'
 img_back='assets/pngegg (6).png'
 errortext='desolé veillez réessayer'
 img_backprod="assets/img-site/bg-img/pngegg (36).png"

 /************************** */
  star(){
    const couleur = document.querySelector('.material-icons-allmaterial-icons ')
    couleur?.classList.toggle('couleur')
  }
  //---------------
  
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
bombom : grille[]=[
  {
    image:"assets/img-site/food/pngegg (24).png",
    name:"aliments"
  },
  {
    image:"assets/img-site/vehicule/pngegg (11).png",
    name:"truck"
  },
  {
    image:"assets/img-site/outils/pngegg (20).png",
    name:"construction"
  },
  {
    image:"assets/img-site/besoin/pngegg (5).png",
    name:"livraison"
  }

]

  ngOnInit(): void {
  }
}
