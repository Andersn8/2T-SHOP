import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperComponent } from './helper/helper.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanierComponent } from './panier/panier.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductcarComponent } from './productcar/productcar.component';
import { FormsModule } from '@angular/forms';
import { ProductfoodComponent } from './productfood/productfood.component';
import { ProductoutilsComponent } from './productoutils/productoutils.component';

@NgModule({
  declarations: [
    AppComponent,
    HelperComponent,
    CarouselComponent,
    PanierComponent,
    CategoriesComponent,
    ProductComponent,
    ProductcarComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home' , component:HomeComponent},
      {path: 'helper' , component:HelperComponent},
      {path: 'carousel' , component:CarouselComponent},
      {path: 'categories' , component:CategoriesComponent},
      
      {path:'products', component:ProductComponent},
      {path:'cars', component:ProductcarComponent},
      {path:'foods', component:ProductfoodComponent},
      {path:'tools', component:ProductoutilsComponent},
      {path:'', component:HomeComponent, pathMatch:'full'},
       {path:'**', component:HomeComponent,pathMatch:'full'},
    ]),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
