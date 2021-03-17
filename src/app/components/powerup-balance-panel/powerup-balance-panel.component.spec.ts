import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerupBalancePanelComponent } from './powerup-balance-panel.component';

describe('PowerupBalancePanelComponent', () => {
  let component: PowerupBalancePanelComponent;
  let fixture: ComponentFixture<PowerupBalancePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerupBalancePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerupBalancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
