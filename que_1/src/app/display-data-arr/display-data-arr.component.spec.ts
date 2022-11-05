import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataArrComponent } from './display-data-arr.component';

describe('DisplayDataArrComponent', () => {
  let component: DisplayDataArrComponent;
  let fixture: ComponentFixture<DisplayDataArrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDataArrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDataArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
