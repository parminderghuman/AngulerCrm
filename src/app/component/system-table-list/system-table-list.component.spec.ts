import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTableListComponent } from './system-table-list.component';

describe('SystemTableListComponent', () => {
  let component: SystemTableListComponent;
  let fixture: ComponentFixture<SystemTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
