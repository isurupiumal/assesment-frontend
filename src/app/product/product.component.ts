import {Component} from '@angular/core';
import { ProductService } from '../productservice';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent { 
    products: Product[];
    sortOptions: SelectItem[];
    sortOrder: number;
    sortField: string;
    id:number = -1;
    quantity: string;
    price:number = 0;
    selectedProduct:string = '';

    constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.productService.getProducts().then(products => this.products = products);
        this.primengConfig.ripple = true;
    }
    
    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    calculate(){
      this.productService.getCalculatedPrice(this.id,Number(this.quantity))
      .then(price =>{ this.price = price;});
    }

    setId(id:number,name:string){
      this.selectedProduct = name;
      this.id = id;
    }
}
