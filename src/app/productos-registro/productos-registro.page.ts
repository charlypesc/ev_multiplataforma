import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from '../services/aws-apigateway.service';

@Component({
  selector: 'app-productos-registro',
  templateUrl: './productos-registro.page.html',
  styleUrls: ['./productos-registro.page.scss'],
})
export class ProductosRegistroPage implements OnInit {
  public nombre!: string;
  public valor!: string;
  constructor(private awsApi: AwsApigatewayService) {}

  ngOnInit() {}
  postProducto() {
    this.awsApi.postProductos(this.nombre, this.valor).subscribe((data) => {
      console.log(data);
    });
  }
}
