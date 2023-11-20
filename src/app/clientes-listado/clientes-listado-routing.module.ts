import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesListadoPage } from './clientes-listado.page';
import { ClientesRegistroPage } from '../clientes-registro/clientes-registro.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesListadoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesListadoPageRoutingModule {}
