import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextDisplayComponent } from './image-text-display.component';

describe('ImageTextDisplayComponent', () => {
  let component: ImageTextDisplayComponent;
  let fixture: ComponentFixture<ImageTextDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageTextDisplayComponent]
    });
    fixture = TestBed.createComponent(ImageTextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
