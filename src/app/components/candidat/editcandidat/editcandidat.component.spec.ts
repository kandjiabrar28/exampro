import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcandidatComponent } from './editcandidat.component';

describe('EditcandidatComponent', () => {
  let component: EditcandidatComponent;
  let fixture: ComponentFixture<EditcandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
