import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTableColumnComponent } from './system-table-column.component';

describe('SystemTableColumnComponent', () => {
  let component: SystemTableColumnComponent;
  let fixture: ComponentFixture<SystemTableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemTableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
