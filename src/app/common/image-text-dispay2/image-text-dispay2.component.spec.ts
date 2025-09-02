import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextDispay2Component } from './image-text-dispay2.component';

describe('ImageTextDispay2Component', () => {
  let component: ImageTextDispay2Component;
  let fixture: ComponentFixture<ImageTextDispay2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageTextDispay2Component]
    });
    fixture = TestBed.createComponent(ImageTextDispay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
