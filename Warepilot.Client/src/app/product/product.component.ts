import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,private productService:ProductService) {

   }
  dataSource:IProduct|undefined;
  displayedColumns=["property","value"]
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe({
        next:(products=>this.dataSource=products.find(x=>x.productId==Number(id)))
    })
  }


}
