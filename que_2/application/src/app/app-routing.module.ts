import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductsComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  { path:'',component:ListProductComponent},
  { path:'add-product',component:AddProductComponent},
  {path:'list-product',component:ListProductComponent},
  { path:'edit-product/:id',component:EditProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
