import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoutilsComponent } from './productoutils.component';

describe('ProductoutilsComponent', () => {
  let component: ProductoutilsComponent;
  let fixture: ComponentFixture<ProductoutilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoutilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
