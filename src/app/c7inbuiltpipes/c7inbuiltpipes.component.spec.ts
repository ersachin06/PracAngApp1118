import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C7inbuiltpipesComponent } from './c7inbuiltpipes.component';

describe('C7inbuiltpipesComponent', () => {
  let component: C7inbuiltpipesComponent;
  let fixture: ComponentFixture<C7inbuiltpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C7inbuiltpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C7inbuiltpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
