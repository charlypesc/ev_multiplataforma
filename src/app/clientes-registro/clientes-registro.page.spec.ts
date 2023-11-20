import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesRegistroPage } from './clientes-registro.page';

describe('ClientesRegistroPage', () => {
  let component: ClientesRegistroPage;
  let fixture: ComponentFixture<ClientesRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientesRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
