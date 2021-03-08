import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLotteryComponent } from './check-lottery.component';

describe('CheckLotteryComponent', () => {
  let component: CheckLotteryComponent;
  let fixture: ComponentFixture<CheckLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckLotteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
