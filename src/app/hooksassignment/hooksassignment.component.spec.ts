import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksassignmentComponent } from './hooksassignment.component';

describe('HooksassignmentComponent', () => {
  let component: HooksassignmentComponent;
  let fixture: ComponentFixture<HooksassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooksassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
