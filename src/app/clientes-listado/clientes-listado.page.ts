import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from '../services/aws-apigateway.service';

@Component({
  selector: 'app-clientes-listado',
  templateUrl: './clientes-listado.page.html',
  styleUrls: ['./clientes-listado.page.scss'],
})
export class ClientesListadoPage implements OnInit {
  public dataUsuario: any[] = [];
  constructor(private awsApi: AwsApigatewayService) {}

  ngOnInit() {
    this.awsApi
      .getUsers()
      .forEach((data: any) => {
        if (data) {
          this.dataUsuario = data.body;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
