import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwsApiPage } from './aws-api.page';

describe('AwsApiPage', () => {
  let component: AwsApiPage;
  let fixture: ComponentFixture<AwsApiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AwsApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
