import { Component } from '@angular/core';
import { CategoryService, ModelService, ProductService, AppService } from '@services/index'
import { from, of } from 'rxjs';
import { map, mergeMap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient
    ) { }

    ngOnInit(){
      this.getAllCategory();
      this.getAllProduct();
    }

    getAllCategory(){
      let url = 'products/categories';
      this.appService.getService(url).subscribe(res => {
        this.allCategories = res;

        let test :any=[];
        of(...this.allCategories)        //outer observable
        .pipe(
          mergeMap(item => {            
            test.push(item);
            const url = 'https://dummyjson.com/products/category/'+item;
            return this.http.get<any>(url)       //inner observable   
          })
        )
        .subscribe(data => {
          for(let i = 0; i<test.length;i++){
            if( test[i] === data.products[0].category ){
              this.allProductsByCategory.push(
                {
                  'category':test[i],
                  'products':data.products
                }
              )
            }
          }
          console.log(this.allProductsByCategory)
        })
      })
    }

  getAllProduct() {
    let url = 'products';
    this.appService.getService(url).subscribe(res => {
      this.allProducts = res;
      })
    }

    getProductsByCategory(category:any){
      let url = 'products/category/'+category;
      let result;
      this.appService.getService(url).subscribe(res => {
        result =res;
      })

      return result;
    }
}
