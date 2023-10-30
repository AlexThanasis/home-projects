import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitterOverviewComponent } from './litter-overview.component';

describe('LitterOverviewComponent', () => {
  let component: LitterOverviewComponent;
  let fixture: ComponentFixture<LitterOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitterOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
