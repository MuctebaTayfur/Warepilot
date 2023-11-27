import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';



@NgModule({
    declarations: [ProductListComponent,
        ProductComponent],
    imports: [
    BrowserAnimationsModule,
    SharedModule
    ]
})

export class ProductModule{}