import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAsyncComponent } from './image-async.component';

describe('PreviewImageComponent', () => {
  let component: ImageAsyncComponent;
  let fixture: ComponentFixture<ImageAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
