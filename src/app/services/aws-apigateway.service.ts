import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AwsApigatewayService {
  url: string =
    'https://q41l7szte2.execute-api.us-east-1.amazonaws.com/OffRetail';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(this.url);
  }
  postUsers(nombre: string, email: string) {
    var body = { nombre: nombre, email: email };
    return this.httpClient.post(this.url, body);
  }
  getProductos() {
    return this.httpClient.get(this.url + '/productos');
  }
  postProductos(nombre: string, valor: string) {
    var body = { nombre: nombre, valor: valor };
    return this.httpClient.post(this.url + '/productos', body);
  }
  getEnvios() {
    return this.httpClient.get(this.url + '/envios');
  }
  postEnvios(id_producto: string, fecha_hora: string) {
    var body = { id_producto: id_producto, fecha_hora: fecha_hora };
    return this.httpClient.post(this.url + '/envios', body);
  }
}
