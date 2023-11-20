import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviosRegistroPage } from './envios-registro.page';

const routes: Routes = [
  {
    path: '',
    component: EnviosRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviosRegistroPageRoutingModule {}
