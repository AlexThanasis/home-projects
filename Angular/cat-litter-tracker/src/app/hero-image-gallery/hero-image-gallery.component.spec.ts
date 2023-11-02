import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageGalleryComponent } from './hero-image-gallery.component';

describe('HeroImageGalleryComponent', () => {
  let component: HeroImageGalleryComponent;
  let fixture: ComponentFixture<HeroImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroImageGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
