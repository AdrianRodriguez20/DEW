import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../components/main/main.component';
import { DetailComponent } from '../components/detail/detail.component';
import { CategoryComponent } from '../components/category/category.component';
import { CarritoComponent } from '../components/carrito/carrito.component';
const routes: Routes = [

  { path: '', component:  MainComponent },
  { path: 'detail/:id', component:  DetailComponent },
  { path: 'category/:categoryId', component:  CategoryComponent },
  { path: 'carrito', component:  CarritoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
