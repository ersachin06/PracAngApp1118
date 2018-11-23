import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C25improovngmodelComponent } from './c25improovngmodel.component';

describe('C25improovngmodelComponent', () => {
  let component: C25improovngmodelComponent;
  let fixture: ComponentFixture<C25improovngmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C25improovngmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C25improovngmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
