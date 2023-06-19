import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component' 
import { MapsComponent } from '../app/components/maps/maps.component' 
import { ProductsComponent } from '../app/components/products/products.component' 
import { DetailProductComponent } from '../app/components/detail-product/detail-product.component' 
import { TableComponent } from '../app/components/table/table.component' 
import { FormInstrumentComponent } from '../app/components/form-instrument/form-instrument.component' 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail-product/:id', component: DetailProductComponent },
  { path: 'products-table', component: TableComponent },
  { path: 'form-instrument/:id', component: FormInstrumentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
