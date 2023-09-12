import { Component } from '@angular/core';
import { CategoryService, ModelService, ProductService, AppService } from '@services/index'


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
})
export class BsNavbarComponent {

  allCategories: any;
  allProducts: any;
  allProductsByCategory: any=[];

  constructor(
    private modelService: ModelService,
    private appService: AppService,
    ) { }

    ngOnInit(){
      this.getAllCategory();
      this.getAllProduct();
    }

    getAllCategory(){
      let url = 'products/categories';
      this.appService.getService(url).subscribe(res => {
        this.allCategories = res;
        console.log('this.allCategories', this.allCategories);
        // for (var i = 0; i < this.allCategories.length; i++) {
        //   this.allCategories[i] = this.allCategories[i].charAt(0).toUpperCase() + this.allCategories[i].slice(1);
        // }
        for (let i = 0; i<this.allCategories.length; i++) {
          let result = this.getProductsByCategory(this.allCategories[i]);
          this.allProductsByCategory.push(result);
          console.log('this.result',result)
        }  
      })
    }

  getAllProduct() {
    let url = 'products';
    this.appService.getService(url).subscribe(res => {
      this.allProducts = res;
      console.log('this.allProducts', this.allProducts);

      })
    }

    getProductsByCategory(category:string){
      let url = 'products/category/'+category;
      let result;
      this.appService.getService(url).subscribe(res => {
        result= res;
      })
      return result
    }
}
