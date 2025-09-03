import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterModalComponent } from './footer-modal.component';

describe('FooterModalComponent', () => {
  let component: FooterModalComponent;
  let fixture: ComponentFixture<FooterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterModalComponent]
    });
    fixture = TestBed.createComponent(FooterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
