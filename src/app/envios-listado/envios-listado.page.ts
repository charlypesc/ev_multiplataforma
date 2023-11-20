import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from '../services/aws-apigateway.service';

@Component({
  selector: 'app-envios-listado',
  templateUrl: './envios-listado.page.html',
  styleUrls: ['./envios-listado.page.scss'],
})
export class EnviosListadoPage implements OnInit {
  public dataUsuario: any[] = [];
  constructor(private awsApi: AwsApigatewayService) {}

  ngOnInit() {
    this.awsApi
      .getEnvios()
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
