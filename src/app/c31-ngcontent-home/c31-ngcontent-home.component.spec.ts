import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C31NgcontentHomeComponent } from './c31-ngcontent-home.component';

describe('C31NgcontentHomeComponent', () => {
  let component: C31NgcontentHomeComponent;
  let fixture: ComponentFixture<C31NgcontentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C31NgcontentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C31NgcontentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
