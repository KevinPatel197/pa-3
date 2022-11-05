import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products:any=[];
  constructor(private service:ProductService,private routes:Router) { }

  ngOnInit(): void {
      this.service.getProducts().subscribe((data:Product[])=>{
        this.products=data;
      })
  }
  ondelete(data:any){
    this.service.deleteProduct(data._id).subscribe(data=>{
      console.log(data);
     })
     this.routes.navigate(['/list-product']);
  }
}
