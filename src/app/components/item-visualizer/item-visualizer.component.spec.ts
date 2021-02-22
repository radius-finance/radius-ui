import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVisualizerComponent } from './item-visualizer.component';

describe('ItemVisualizerComponent', () => {
  let component: ItemVisualizerComponent;
  let fixture: ComponentFixture<ItemVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemVisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
