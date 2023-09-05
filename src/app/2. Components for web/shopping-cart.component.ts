import { Component, OnInit } from '@angular/core';
import { ModelService, ProductService } from '../_services';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  totalWithCharges: number=0;

  constructor(
    private modelService: ModelService,
    ) { }
    cartLength:number = 0;
    totalAmount:number = 0;
    myProduct:any[] = [];
  ngOnInit() {
    this.myProduct = this.modelService.getDataByKey('myCart');
    console.log('myProduct',this.myProduct);
    this.cartLength = this.myProduct.length;
    for(let i = 0; i <this.myProduct.length;i++ ){
      this.totalAmount += this.myProduct[i].price;
    }
    this.totalWithCharges =this.totalAmount+22;
  }

}
