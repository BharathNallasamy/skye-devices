import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecModalComponent } from './product-spec-modal.component';

describe('ProductSpecModalComponent', () => {
  let component: ProductSpecModalComponent;
  let fixture: ComponentFixture<ProductSpecModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSpecModalComponent]
    });
    fixture = TestBed.createComponent(ProductSpecModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
