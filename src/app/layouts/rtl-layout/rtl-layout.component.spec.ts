import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RtlLayoutComponent } from "./rtl-layout.component";

describe("RtlLayoutComponent", () => {
  let component: RtlLayoutComponent;
  let fixture: ComponentFixture<RtlLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RtlLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtlLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
