import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table';
import { ProductService } from '../productservice';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  units:Table[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getTable().then(units =>this.units = units);
  }

}
