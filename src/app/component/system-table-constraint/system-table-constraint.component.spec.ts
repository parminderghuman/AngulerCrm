import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTableConstraintComponent } from './system-table-constraint.component';

describe('SystemTableConstraintComponent', () => {
  let component: SystemTableConstraintComponent;
  let fixture: ComponentFixture<SystemTableConstraintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemTableConstraintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTableConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
