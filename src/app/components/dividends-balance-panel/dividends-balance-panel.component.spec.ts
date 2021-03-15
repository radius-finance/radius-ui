import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DividendsBalancePanelComponent} from './dividends-balance-panel.component';

describe('DividendsBalancePanelComponent', () => {
  let component: DividendsBalancePanelComponent;
  let fixture: ComponentFixture<DividendsBalancePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DividendsBalancePanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendsBalancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
