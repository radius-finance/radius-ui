import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertPanelComponent } from './convert-panel.component';

describe('ConvertPanelComponent', () => {
  let component: ConvertPanelComponent;
  let fixture: ComponentFixture<ConvertPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
