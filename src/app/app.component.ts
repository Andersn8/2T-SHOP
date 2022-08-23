import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2T-SHOP';
  //fonction du click menu


  //****************image utilisée */


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
  gogo(){
    const top= document.querySelector('.menu')
    const topp= document.querySelector('.icon-menu')
    
    topp?.classList.toggle('topp')
    top?.classList.toggle('top')
   
  }
  star(){
    const couleur = document.querySelector('.material-icons-allmaterial-icons ')
    couleur?.classList.toggle('couleur')
  }
  //---------------
  
  
}

