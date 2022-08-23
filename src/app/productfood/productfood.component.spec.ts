import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfoodComponent } from './productfood.component';

describe('ProductfoodComponent', () => {
  let component: ProductfoodComponent;
  let fixture: ComponentFixture<ProductfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
