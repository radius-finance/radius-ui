import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAddressesPanelComponent } from './contract-addresses-panel.component';

describe('ContractAddressesPanelComponent', () => {
  let component: ContractAddressesPanelComponent;
  let fixture: ComponentFixture<ContractAddressesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractAddressesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractAddressesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
