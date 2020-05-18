import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcandidatComponent } from './searchcandidat.component';

describe('SearchcandidatComponent', () => {
  let component: SearchcandidatComponent;
  let fixture: ComponentFixture<SearchcandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
