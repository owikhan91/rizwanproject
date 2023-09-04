import { Component } from '@angular/core';
import { ProductService,ModelService } from '../_services';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products: Product[] = [];

  myCart : Product[] = [];
  constructor(
    private productService: ProductService,
    private modelService: ModelService,
    ) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts().subscribe(res => {
      this.products = res;      
    })
  }

  addToCart(product:Product){
    console.log('product',product);

    this.myCart.push(product|| {});
    this.modelService.setDataByKey('myCart',this.myCart);
  }
}
