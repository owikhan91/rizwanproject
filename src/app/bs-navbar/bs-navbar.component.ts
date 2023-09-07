import { Component } from '@angular/core';
import { CategoryService,ModelService, ProductService } from '../_services';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
})
export class BsNavbarComponent {
  categories: any;
  products: any;
  AllCategories: any=[];

  
  constructor(
    private categoryService: CategoryService,
    private modelService: ModelService,
    private productService: ProductService,
    ) { }

    ngOnInit(){
      this.getAllCategory();
      this.getProducts();
    }

    getAllCategory(){
      this.categoryService.getAllCategory().subscribe(res => {
        this.categories = res;
        for (var i = 0; i < this.categories.length; i++) {
          this.categories[i] = this.categories[i].charAt(0).toUpperCase() + this.categories[i].slice(1);
      }  
      })
    }

    selectCategory(event:any){
      console.log(event)
      let category = event;
      this.categoryService.getCategory(category).subscribe(res => {
        console.log(res)
      })
    }
    getProducts(){
      this.productService.getAllProducts().subscribe(res => {
        this.products = res;
        const unique:any = [];
// Declaration of data 
const data = [
  { name: 'Orange', type: 'fruit' },
  { name: 'Orange', type: 'fruit' },
  { name: 'Pineapple', type: 'fruit' },
  { name: 'Pineapple', type: 'fruit' },
  { name: 'Potato', type: 'vegetable' },
  { name: 'Tomato', type: 'vegetable' },
  { name: 'spinach', type: 'vegetable' },
  { name: 'spinach', type: 'vegetable' }
];
// declaration of function with three arguments

let result = this.countCollect(this.products, 'category', );
console.log(result);
        // this.exporterNames = res.data;
        /*
        this.products.filter((element:any) => {
          console.log('element 1',element)
          const isDuplicate = this.AllCategories.includes({category:element.category});
          console.log('isDuplicate',isDuplicate);
          if( !isDuplicate ){
            // this.AllCategories.push(
            //   { category:element.category, quantity:1}
            // )
            this.AllCategories.push({category:element.category})
          }
        });
        console.log('AllCategories',this.AllCategories);
        
        */
        
      })
      
    }

    countCollect(data:any, pCount:any) {
      let count:any = {};
      for (let obj of data) {
      let pValue = obj[pCount];
      if (pValue in count) {
         count[pValue]++;
      } else {
        count[pValue] = 1;
      }
      }
      let result:any = {};
      // for (let obj of data) {
      // let gValue = obj[pGroup];
      // if (gValue in result) {
      //    result[gValue].push(obj);
      // } else {
      //    result[gValue] = [obj];
      // }
      // }
      for (let pValue in count) {
      result[pValue] = {
        count: count[pValue]
      };
      }
      return result;
    }
}
