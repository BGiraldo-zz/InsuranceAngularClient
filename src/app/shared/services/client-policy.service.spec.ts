import { TestBed } from '@angular/core/testing';

import { ClientPolicyService } from './client-policy.service';

describe('ClientPolicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientPolicyService = TestBed.get(ClientPolicyService);
    expect(service).toBeTruthy();
  });
});
