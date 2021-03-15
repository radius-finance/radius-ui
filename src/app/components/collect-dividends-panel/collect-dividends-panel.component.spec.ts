import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectDividendsPanelComponent } from './collect-dividends-panel.component';

describe('CollectDividendsPanelComponent', () => {
  let component: CollectDividendsPanelComponent;
  let fixture: ComponentFixture<CollectDividendsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectDividendsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectDividendsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
