import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecomp3Component } from './servicecomp3.component';

describe('Servicecomp3Component', () => {
  let component: Servicecomp3Component;
  let fixture: ComponentFixture<Servicecomp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecomp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
