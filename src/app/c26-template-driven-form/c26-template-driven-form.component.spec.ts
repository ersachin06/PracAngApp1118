import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C26TemplateDrivenFormComponent } from './c26-template-driven-form.component';

describe('C26TemplateDrivenFormComponent', () => {
  let component: C26TemplateDrivenFormComponent;
  let fixture: ComponentFixture<C26TemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C26TemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C26TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
