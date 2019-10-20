import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMonetizationChartComponent } from './ad-monetization-chart.component';

describe('AdMonetizationChartComponent', () => {
  let component: AdMonetizationChartComponent;
  let fixture: ComponentFixture<AdMonetizationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMonetizationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMonetizationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
