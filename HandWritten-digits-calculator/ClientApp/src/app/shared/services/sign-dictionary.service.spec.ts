import { TestBed } from '@angular/core/testing';

import { SignDictionaryService } from './sign-dictionary.service';

describe('SignDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignDictionaryService = TestBed.get(SignDictionaryService);
    expect(service).toBeTruthy();
  });
});
