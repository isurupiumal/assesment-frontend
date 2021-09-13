import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './app.component';
import { ProductService } from './productservice';

import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    TableModule
  ],
  declarations: [ AppComponent,  ProductComponent, TableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})

export class AppModule { }
