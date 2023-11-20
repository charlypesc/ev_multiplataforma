import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosListadoPageRoutingModule } from './productos-listado-routing.module';

import { ProductosListadoPage } from './productos-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosListadoPageRoutingModule
  ],
  declarations: [ProductosListadoPage]
})
export class ProductosListadoPageModule {}
