import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C32SourceSendingObjComponent } from './c32-source-sending-obj.component';

describe('C32SourceSendingObjComponent', () => {
  let component: C32SourceSendingObjComponent;
  let fixture: ComponentFixture<C32SourceSendingObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C32SourceSendingObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C32SourceSendingObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
