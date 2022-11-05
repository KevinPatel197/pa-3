import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl, FormGroup ,Validator}   from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductsComponent implements OnInit {


  constructor(private productService:ProductService,private router:ActivatedRoute,private routes:Router){}
  editProduct=new FormGroup({
    product_name:new FormControl(''),    
    product_price:new FormControl(''),
    product_category:new FormControl(''),
    manufacturer:new FormControl(''),
    _id:new FormControl('')
  })
  
   product:any=[];
   ngOnInit() :void{
    // first get querystring parameter using 
  //  this.router.params.subscribe(params=>{this.studentService.singleStudent(params['id'])}))
    this.router.params.subscribe(params => {
      console.log(params['id'])
       this.productService.getProduct(params['id']).subscribe((res)=>{
        this.product=res;
      });
    });
  }
  UpdateData(){
        //console.log(this.editStudent.value);
        this.productService.updateProduct(this.editProduct.value).subscribe((data:any)=>{
          this.routes.navigate(['list-product']);
        })
  }   
}
