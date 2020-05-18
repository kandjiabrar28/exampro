import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamproComponent } from './exampro.component';

describe('ExamproComponent', () => {
  let component: ExamproComponent;
  let fixture: ComponentFixture<ExamproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
