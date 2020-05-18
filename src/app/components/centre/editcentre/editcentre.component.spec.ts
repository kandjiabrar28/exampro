import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcentreComponent } from './editcentre.component';

describe('EditcentreComponent', () => {
  let component: EditcentreComponent;
  let fixture: ComponentFixture<EditcentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
