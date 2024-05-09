import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{ path: 'customer', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
{ path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),canActivate:[AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
