import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitterMeasurementComponent } from './litter-measurement.component';

describe('LitterMeasurementComponent', () => {
  let component: LitterMeasurementComponent;
  let fixture: ComponentFixture<LitterMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitterMeasurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitterMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
