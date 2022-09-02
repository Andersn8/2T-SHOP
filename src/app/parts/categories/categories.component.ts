import { Component, OnInit } from '@angular/core';
import { ImainCategorie } from './categorie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 categor:ImainCategorie[]=[
  {
    title:'foods categorie',
    item:[]=[ {
      names:'food',
     images:'../assets/img-site/food/pngegg (34).png',
     descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
     reads:'Read More'
  },
  {
    names:'food',
   images:'../assets/img-site/food/pngegg (28).png',
   descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
   reads:'Read More'
},
{
  names:'food',
 images:'../assets/img-site/food/pngegg (32).png',
 descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
 reads:'Read More'
}]
  },
  {
    title:' vehicule categories',
    item:[]=[ {
      names:'food',
     images:'../assets/img-site/vehicule/pngegg (12).png',
     descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
     reads:'Read More'
  },
  {
    names:'food',
   images:'../assets/img-site/vehicule/pngegg (16).png',
   descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
   reads:'Read More'
},
{
  names:'truck',
 images:'../assets/img-site/vehicule/pngegg (4).png',
 descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
 reads:'Read More'
},]
  }
  ,
  {
    title:' outils categories',
    item:[]=[ {
      names:'food',
     images:'../assets/img-site/outils/pngegg (18).png',
     descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
     reads:'Read More'
  },
  {
    names:'food',
   images:'../assets/img-site/outils/pngegg (19).png',
   descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
   reads:'Read More'
},
{
  names:'truck',
 images:'../assets/img-site/outils/pngegg (22).png',
 descrips:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
 reads:'Read More'
},]
  }
 ]

}
