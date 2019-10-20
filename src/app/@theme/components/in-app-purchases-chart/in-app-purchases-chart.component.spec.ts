import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppPurchasesChartComponent } from './in-app-purchases-chart.component';

describe('InAppPurchasesChartComponent', () => {
  let component: InAppPurchasesChartComponent;
  let fixture: ComponentFixture<InAppPurchasesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppPurchasesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppPurchasesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
