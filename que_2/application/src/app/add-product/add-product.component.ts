import { Component, OnInit } from '@angular/core';
import { FormBuilder  ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  constructor(private fb:FormBuilder,
    private routes:Router,
    private ss: ProductService) { 
      this.addProduct= fb.group({
        product_name:['', Validators.required],
        product_price:['', Validators.required],
        product_category:['', Validators.required],
        manufacturer:['', Validators.required]
      })
    }

  ngOnInit(): void {
  }
  addProduct:any;
  onSubmit(){
    this.ss.addProduct(this.addProduct.value)
    .subscribe((data:any)=>{ 
    })
    this.routes.navigate(['list-product']);
    
  }
}
