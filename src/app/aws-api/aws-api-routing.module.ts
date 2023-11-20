import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwsApiPage } from './aws-api.page';

const routes: Routes = [
  {
    path: '',
    component: AwsApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwsApiPageRoutingModule {}
