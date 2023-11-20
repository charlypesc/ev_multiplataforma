import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from '../services/aws-apigateway.service';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.page.html',
  styleUrls: ['./productos-listado.page.scss'],
})
export class ProductosListadoPage implements OnInit {
  public dataUsuario: any[] = [];
  constructor(private awsApi: AwsApigatewayService) {}

  ngOnInit() {
    this.awsApi.getProductos().subscribe((data: any) => {
      if (data) {
        this.dataUsuario = data.body;
      }
    });
  }
}
