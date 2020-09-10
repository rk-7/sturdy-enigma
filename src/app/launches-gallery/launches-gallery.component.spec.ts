import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesGalleryComponent } from './launches-gallery.component';

describe('LaunchesGalleryComponent', () => {
  let component: LaunchesGalleryComponent;
  let fixture: ComponentFixture<LaunchesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
