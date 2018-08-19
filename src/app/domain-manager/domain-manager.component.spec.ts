import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainManagerComponent } from './domain-manager.component';

describe('DomainManagerComponent', () => {
  let component: DomainManagerComponent;
  let fixture: ComponentFixture<DomainManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
