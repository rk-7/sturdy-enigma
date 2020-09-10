import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesGalleryComponent } from './launches-gallery.component';
import { LaunchesService } from '../launches.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@nestjs/common';

describe('LaunchesGalleryComponent', () => {
  let component: LaunchesGalleryComponent;
  let fixture: ComponentFixture<LaunchesGalleryComponent>;
  let httpMock: HttpTestingController;
  const apiBase = 'https://api.spacexdata.com/v3';
  const launchApi = `${apiBase}/launches`;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesGalleryComponent ],
      providers: [LaunchesService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesGalleryComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    fixture.detectChanges();
  });
  it('should create', () => {
    httpMock.expectOne(req => req.method === 'GET' && req.url.includes(launchApi))
    .flush(null, { status: 200, statusText: 'Ok' });
    expect(component).toBeTruthy();
  });
  afterEach(() => {
    httpMock.verify();
  });
});
