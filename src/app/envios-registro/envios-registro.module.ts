import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviosRegistroPageRoutingModule } from './envios-registro-routing.module';

import { EnviosRegistroPage } from './envios-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviosRegistroPageRoutingModule
  ],
  declarations: [EnviosRegistroPage]
})
export class EnviosRegistroPageModule {}
