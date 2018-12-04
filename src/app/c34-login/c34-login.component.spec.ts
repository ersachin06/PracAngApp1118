import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C34LoginComponent } from './c34-login.component';

describe('C34LoginComponent', () => {
  let component: C34LoginComponent;
  let fixture: ComponentFixture<C34LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C34LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C34LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
