import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgeItemComponent } from './forge-item.component';

describe('ForgeItemComponent', () => {
  let component: ForgeItemComponent;
  let fixture: ComponentFixture<ForgeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
