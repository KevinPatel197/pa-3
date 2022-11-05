import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArrComboComponent } from './display-arr-combo.component';

describe('DisplayArrComboComponent', () => {
  let component: DisplayArrComboComponent;
  let fixture: ComponentFixture<DisplayArrComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayArrComboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayArrComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
