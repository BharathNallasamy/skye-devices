import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDispay2Component } from './image-dispay2.component';

describe('ImageDispay2Component', () => {
  let component: ImageDispay2Component;
  let fixture: ComponentFixture<ImageDispay2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDispay2Component]
    });
    fixture = TestBed.createComponent(ImageDispay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
