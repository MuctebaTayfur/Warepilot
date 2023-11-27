import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../../models/product'
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private errorMessage='';
  constructor(private productService:ProductService) { }

  sub! :Subscription;
  displayedColumns: string[] = ['showImage', 'order', 'name', 'price', 'category','rating'];
  showImage = false;

  toggleItem() {
    if (this.showImage)
      this.showImage = false;
    else
      this.showImage = true;
  }
  
  productList: IProduct[]=[];
  
  filteredProducts: IProduct[] = [];
  set listFilter(value: string) {
    this.filteredProducts = this.performFilter(value);
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productList.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  ngOnInit(): void {
    this.sub=this.productService.getProducts().subscribe({
      next:(products=>{
        this.productList=products,
        this.filteredProducts=this.productList;}),
      error:(err=>this.errorMessage=err)   
    });      
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
