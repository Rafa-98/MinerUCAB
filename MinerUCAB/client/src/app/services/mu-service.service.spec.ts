import { TestBed } from '@angular/core/testing';

import { MuServiceService } from './mu-service.service';

describe('MuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuServiceService = TestBed.get(MuServiceService);
    expect(service).toBeTruthy();
  });
});
