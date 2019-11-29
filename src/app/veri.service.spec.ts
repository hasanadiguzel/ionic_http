import { TestBed } from '@angular/core/testing';

import { VeriService } from './veri.service';

describe('VeriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeriService = TestBed.get(VeriService);
    expect(service).toBeTruthy();
  });
});
