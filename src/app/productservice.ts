import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { environment } from 'src/environments/environment';
import { Table } from './models/table';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product = new Product();
  productList: Array<Product> = new Array<Product>();
  totalPrice: number;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(environment.api+'products')
      .toPromise()
      .then(res =>{<Product[]>res;return res;});
  }

  getCalculatedPrice(id:number,quantity:number) {
      return this.http.get<any>(environment.api+'product/calculate?id='+id+'&quantity='+quantity)
        .toPromise()
        .then(res =>{return res;});
  }

  getTable() {
    return this.http.get<any>(environment.api+'product/units')
      .toPromise()
      .then(res =>{<Table[]>res;return res;});
  }
}
