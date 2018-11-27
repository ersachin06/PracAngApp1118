import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C29ParentComponent } from './c29-parent.component';

describe('C29ParentComponent', () => {
  let component: C29ParentComponent;
  let fixture: ComponentFixture<C29ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C29ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C29ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
