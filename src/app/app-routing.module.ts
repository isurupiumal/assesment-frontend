import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component'
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
