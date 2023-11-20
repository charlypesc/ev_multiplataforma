import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosListadoPage } from './productos-listado.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosListadoPageRoutingModule {}
