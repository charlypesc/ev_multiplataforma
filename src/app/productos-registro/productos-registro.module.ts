import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosRegistroPageRoutingModule } from './productos-registro-routing.module';

import { ProductosRegistroPage } from './productos-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosRegistroPageRoutingModule
  ],
  declarations: [ProductosRegistroPage]
})
export class ProductosRegistroPageModule {}
