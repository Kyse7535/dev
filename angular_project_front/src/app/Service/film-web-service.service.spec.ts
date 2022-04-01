import { TestBed } from '@angular/core/testing';

import { FilmWebServiceService } from './film-web-service.service';

describe('FilmWebServiceService', () => {
  let service: FilmWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
