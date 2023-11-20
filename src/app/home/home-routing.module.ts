import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AwsApiPage } from '../aws-api/aws-api.page';
import { ClientesListadoPage } from '../clientes-listado/clientes-listado.page';
import { ProductosListadoPage } from '../productos-listado/productos-listado.page';
import { EnviosListadoPage } from '../envios-listado/envios-listado.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'aws-test',
    component: AwsApiPage,
  },
  {
    path: 'clientes-listado',
    component: ClientesListadoPage,
  },
  {
    path: 'productos-listado',
    component: ProductosListadoPage,
  },
  {
    path: 'envios-listado',
    component: EnviosListadoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
