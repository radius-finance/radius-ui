import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviousDividendClaimsComponent} from './previous-dividend-claims.component';

describe('PreviousDividendClaimsComponent', () => {
  let component: PreviousDividendClaimsComponent;
  let fixture: ComponentFixture<PreviousDividendClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviousDividendClaimsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousDividendClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
