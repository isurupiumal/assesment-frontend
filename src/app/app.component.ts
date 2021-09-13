import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './models/product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

    constructor() { }

    ngOnInit() {
    
    }
    
}
