import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnviosRegistroPage } from './envios-registro.page';

describe('EnviosRegistroPage', () => {
  let component: EnviosRegistroPage;
  let fixture: ComponentFixture<EnviosRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnviosRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
