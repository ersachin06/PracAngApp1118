import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C27TDFValidationComponent } from './c27-tdfvalidation.component';

describe('C27TDFValidationComponent', () => {
  let component: C27TDFValidationComponent;
  let fixture: ComponentFixture<C27TDFValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C27TDFValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C27TDFValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
