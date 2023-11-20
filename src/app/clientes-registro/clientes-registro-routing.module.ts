import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesRegistroPage } from './clientes-registro.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRegistroPageRoutingModule {}
