import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgassignmentComponent } from './ngassignment.component';

describe('NgassignmentComponent', () => {
  let component: NgassignmentComponent;
  let fixture: ComponentFixture<NgassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
