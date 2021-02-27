import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeTokenComponent } from './stake-token.component';

describe('StakeTokenComponent', () => {
  let component: StakeTokenComponent;
  let fixture: ComponentFixture<StakeTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
