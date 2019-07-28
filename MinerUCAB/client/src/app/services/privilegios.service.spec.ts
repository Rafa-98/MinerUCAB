import { TestBed } from '@angular/core/testing';

import { PrivilegiosService } from './privilegios.service';

describe('PrivilegiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivilegiosService = TestBed.get(PrivilegiosService);
    expect(service).toBeTruthy();
  });
});
