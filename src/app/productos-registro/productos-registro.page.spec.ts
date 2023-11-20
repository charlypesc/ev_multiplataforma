import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosRegistroPage } from './productos-registro.page';

describe('ProductosRegistroPage', () => {
  let component: ProductosRegistroPage;
  let fixture: ComponentFixture<ProductosRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductosRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
