import { TestBed } from '@angular/core/testing';

import { FetchImageService } from './fetch-image.service';

describe('FetchImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchImageService = TestBed.get(FetchImageService);
    expect(service).toBeTruthy();
  });
});
