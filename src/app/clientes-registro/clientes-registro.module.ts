import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesRegistroPageRoutingModule } from './clientes-registro-routing.module';

import { ClientesRegistroPage } from './clientes-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesRegistroPageRoutingModule
  ],
  declarations: [ClientesRegistroPage]
})
export class ClientesRegistroPageModule {}
