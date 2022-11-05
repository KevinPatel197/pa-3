import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:8000/add-product'
  constructor(private http:HttpClient) { }

    addProduct(product:Product){
      return this.http.post(this.url,product);    
    }
    url01='http://localhost:8000'
    getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url01);
    }
    deleteProduct(id:any)
    {
      return this.http.delete(`${this.url01}/delete/${id}`)      
    }
    // url02='http://localhost:9000'
    // singleStudent(id:any){
    //   return  this.http.get(`${this.url02}/edit-student/${id}`);
    // }
    getProduct(id :any) {
      return this
              .http
              .get(`${this.url01}/edit-product/${id}`);
      }
  
   updateProduct(Product:any){
       return this.http.put(`${this.url01}/edit-product/`+Product._id, Product)
   }

}
