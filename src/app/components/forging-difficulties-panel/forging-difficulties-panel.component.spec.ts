import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgingDifficultiesPanelComponent } from './forging-difficulties-panel.component';

describe('ForgingDifficultiesPanelComponent', () => {
  let component: ForgingDifficultiesPanelComponent;
  let fixture: ComponentFixture<ForgingDifficultiesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgingDifficultiesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgingDifficultiesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
