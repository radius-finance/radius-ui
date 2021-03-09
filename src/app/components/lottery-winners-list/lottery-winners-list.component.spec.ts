import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryWinnersListComponent } from './lottery-winners-list.component';

describe('LotteryWinnersListComponent', () => {
  let component: LotteryWinnersListComponent;
  let fixture: ComponentFixture<LotteryWinnersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryWinnersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryWinnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
