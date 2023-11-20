import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from '../services/aws-apigateway.service';

@Component({
  selector: 'app-clientes-registro',
  templateUrl: './clientes-registro.page.html',
  styleUrls: ['./clientes-registro.page.scss'],
})
export class ClientesRegistroPage implements OnInit {
  public nombre!: string;
  public email!: string;

  constructor(private awsApi: AwsApigatewayService) {}

  ngOnInit() {}
  postUser() {
    this.awsApi.postUsers(this.nombre, this.email).subscribe((data) => {
      console.log(data);
    });
  }
}
