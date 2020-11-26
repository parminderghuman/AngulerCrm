import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuDrawerComponent } from './left-menu-drawer.component';

describe('LeftMenuDrawerComponent', () => {
  let component: LeftMenuDrawerComponent;
  let fixture: ComponentFixture<LeftMenuDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
