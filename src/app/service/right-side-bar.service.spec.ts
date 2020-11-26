import { TestBed } from '@angular/core/testing';

import { RightSideBarService } from './right-side-bar.service';

describe('RightSideBarService', () => {
  let service: RightSideBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightSideBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
