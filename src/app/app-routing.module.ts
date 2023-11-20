import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'aws-api',
    loadChildren: () =>
      import('./aws-api/aws-api.module').then((m) => m.AwsApiPageModule),
  },
  {
    path: 'clientes-listado',
    loadChildren: () =>
      import('./clientes-listado/clientes-listado.module').then(
        (m) => m.ClientesListadoPageModule
      ),
  },
  {
    path: 'clientes-registro',
    loadChildren: () =>
      import('./clientes-registro/clientes-registro.module').then(
        (m) => m.ClientesRegistroPageModule
      ),
  },
  {
    path: 'productos-registro',
    loadChildren: () => import('./productos-registro/productos-registro.module').then( m => m.ProductosRegistroPageModule)
  },
  {
    path: 'productos-listado',
    loadChildren: () => import('./productos-listado/productos-listado.module').then( m => m.ProductosListadoPageModule)
  },
  {
    path: 'envios-registro',
    loadChildren: () => import('./envios-registro/envios-registro.module').then( m => m.EnviosRegistroPageModule)
  },
  {
    path: 'envios-listado',
    loadChildren: () => import('./envios-listado/envios-listado.module').then( m => m.EnviosListadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
