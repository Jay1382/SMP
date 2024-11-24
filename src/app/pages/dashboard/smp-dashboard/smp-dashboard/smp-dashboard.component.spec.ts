import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpDashboardComponent } from './smp-dashboard.component';

describe('SmpDashboardComponent', () => {
  let component: SmpDashboardComponent;
  let fixture: ComponentFixture<SmpDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmpDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
