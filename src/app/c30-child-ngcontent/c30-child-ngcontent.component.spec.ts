import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C30ChildNgcontentComponent } from './c30-child-ngcontent.component';

describe('C30ChildNgcontentComponent', () => {
  let component: C30ChildNgcontentComponent;
  let fixture: ComponentFixture<C30ChildNgcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C30ChildNgcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C30ChildNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
