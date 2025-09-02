import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOrderingModalComponent } from './pre-ordering-modal.component';

describe('PreOrderingModalComponent', () => {
  let component: PreOrderingModalComponent;
  let fixture: ComponentFixture<PreOrderingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreOrderingModalComponent]
    });
    fixture = TestBed.createComponent(PreOrderingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
