import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component' 
import { MapsComponent } from '../app/components/maps/maps.component' 
import { ProductsComponent } from '../app/components/products/products.component' 
import { DetailProductComponent } from '../app/components/detail-product/detail-product.component' 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail-product/:id', component: DetailProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
