import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C28ReactiveFormsComponent } from './c28-reactive-forms.component';

describe('C28ReactiveFormsComponent', () => {
  let component: C28ReactiveFormsComponent;
  let fixture: ComponentFixture<C28ReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C28ReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C28ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
