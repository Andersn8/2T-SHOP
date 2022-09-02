import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { CategoriesComponent } from './parts/categories/categories.component';
import { HelperComponent } from './parts/helper/helper.component';
import { HomeComponent } from './parts/home/home.component';
import { PanierComponent } from './parts/panier/panier.component';
import { ProductComponent } from './products/product/product.component';
import { ProductcarComponent } from './products/productcar/productcar.component';
import { ProductfoodComponent } from './products/productfood/productfood.component';
import { ProductoutilsComponent } from './products/productoutils/productoutils.component';
import { CarouselComponent } from './parts/carousel/carousel.component';


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
    NgxPrintModule,
    FormsModule,
    MatSliderModule,
    MatTabsModule,
 
    RouterModule.forRoot([
      {path:'cars', component:ProductcarComponent},
      {path:'foods', component:ProductfoodComponent},
      {path:'tools', component:ProductoutilsComponent}, 

      {path: 'home' , component:HomeComponent},

      {path: 'helper' , component:HelperComponent},
      
      {path: 'carousel' , component:CarouselComponent},
      {path: 'categories' , component:CategoriesComponent},
      {path:'products', component:ProductComponent},
 
      {path:'', component:HomeComponent, pathMatch:'full'},
       {path:'**', component:HomeComponent,pathMatch:'full'},
    ]),
    NgbModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
