import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwsApiPageRoutingModule } from './aws-api-routing.module';

import { AwsApiPage } from './aws-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwsApiPageRoutingModule
  ],
  declarations: [AwsApiPage]
})
export class AwsApiPageModule {}
