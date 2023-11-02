import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageThumbnailComponent } from './hero-image-thumbnail.component';

describe('HeroImageThumbnailComponent', () => {
  let component: HeroImageThumbnailComponent;
  let fixture: ComponentFixture<HeroImageThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroImageThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
