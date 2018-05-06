import { TestBed, inject } from '@angular/core/testing';

import { CardsResolve } from './cards.resolver';

describe('CardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardsResolve]
    });
  });

  it('should be created', inject([CardsResolve], (service: CardsResolve) => {
    expect(service).toBeTruthy();
  }));
});
