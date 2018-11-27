import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C33DstRcvObjQueryStringComponent } from './c33-dst-rcv-obj-query-string.component';

describe('C33DstRcvObjQueryStringComponent', () => {
  let component: C33DstRcvObjQueryStringComponent;
  let fixture: ComponentFixture<C33DstRcvObjQueryStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C33DstRcvObjQueryStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C33DstRcvObjQueryStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
