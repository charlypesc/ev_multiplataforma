import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviosListadoPageRoutingModule } from './envios-listado-routing.module';

import { EnviosListadoPage } from './envios-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviosListadoPageRoutingModule
  ],
  declarations: [EnviosListadoPage]
})
export class EnviosListadoPageModule {}
