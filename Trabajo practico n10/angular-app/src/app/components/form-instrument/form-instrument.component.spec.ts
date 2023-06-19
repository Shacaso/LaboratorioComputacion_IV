import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInstrumentComponent } from './form-instrument.component';

describe('FormInstrumentComponent', () => {
  let component: FormInstrumentComponent;
  let fixture: ComponentFixture<FormInstrumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInstrumentComponent]
    });
    fixture = TestBed.createComponent(FormInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
