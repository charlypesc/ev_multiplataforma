import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from '../services/aws-apigateway.service';

@Component({
  selector: 'app-aws-api',
  templateUrl: './aws-api.page.html',
  styleUrls: ['./aws-api.page.scss'],
})
export class AwsApiPage implements OnInit {
  public nombre!: string;
  public email!: string;
  constructor(private awsApi: AwsApigatewayService) {}
  ngOnInit() {
    this.awsApi.getUsers().forEach((data: any) => {
      console.log(data);
    });
  }
  postUser() {
    this.awsApi.postUsers(this.nombre, this.email).subscribe((data) => {
      console.log(data);
    });
  }
}
