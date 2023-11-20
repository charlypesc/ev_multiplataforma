import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from '../services/aws-apigateway.service';

@Component({
  selector: 'app-envios-registro',
  templateUrl: './envios-registro.page.html',
  styleUrls: ['./envios-registro.page.scss'],
})
export class EnviosRegistroPage implements OnInit {
  public id_producto!: string;
  public fecha_hora!: string;
  constructor(private awsApi: AwsApigatewayService) {}

  ngOnInit() {}
  postEnvio() {
    this.awsApi
      .postEnvios(this.id_producto, this.fecha_hora)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
