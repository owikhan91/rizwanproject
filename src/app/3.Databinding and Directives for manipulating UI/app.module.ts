import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './_services/product.service';
import { HttpClientModule } from '@angular/common/http';

// import { ProductFilterComponent } from './products/product-filter/product-filter.component';
// import { ProductCardComponent } from './product-card/product-card.component';
const routes: Routes = [
  { path: '', component: AppComponent},
  {path:'product', component: ProductsComponent},
  {path:'shopping-cart', component: ShoppingCartComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ShoppingCartComponent,
    ProductsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
