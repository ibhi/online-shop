import { TestBed, inject } from '@angular/core/testing';

import { FetchInterceptorService } from './fetch-interceptor.service';

describe('FetchInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchInterceptorService]
    });
  });

  it('should be created', inject([FetchInterceptorService], (service: FetchInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
