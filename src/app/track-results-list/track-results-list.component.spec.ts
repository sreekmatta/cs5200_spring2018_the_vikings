import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackResultsListComponent } from './track-results-list.component';

describe('TrackResultsListComponent', () => {
  let component: TrackResultsListComponent;
  let fixture: ComponentFixture<TrackResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
