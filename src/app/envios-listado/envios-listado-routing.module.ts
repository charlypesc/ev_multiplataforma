import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviosListadoPage } from './envios-listado.page';

const routes: Routes = [
  {
    path: '',
    component: EnviosListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviosListadoPageRoutingModule {}
