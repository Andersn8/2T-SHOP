import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcarComponent } from './productcar.component';

describe('ProductcarComponent', () => {
  let component: ProductcarComponent;
  let fixture: ComponentFixture<ProductcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
