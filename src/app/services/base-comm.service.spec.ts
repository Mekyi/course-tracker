import { TestBed } from '@angular/core/testing';

import { BaseCommService } from './base-comm.service';

describe('BaseCommService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseCommService = TestBed.get(BaseCommService);
    expect(service).toBeTruthy();
  });
});
