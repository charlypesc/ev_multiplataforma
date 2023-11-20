import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnviosListadoPage } from './envios-listado.page';

describe('EnviosListadoPage', () => {
  let component: EnviosListadoPage;
  let fixture: ComponentFixture<EnviosListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnviosListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
