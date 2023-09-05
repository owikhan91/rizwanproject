//Task 1 - Create Interfaces:
export class ProductNode {
  key: string | undefined;
  product: Product | undefined;
}

export interface Product {
  category:string;
  description:string;
  id:number;
  image:string;
  price:number;
  rating:any;
  title:string;
}