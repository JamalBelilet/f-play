import { TestBed, inject } from '@angular/core/testing';

import { DbMetaDataService } from './db-meta-data.service';

describe('DbMetaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbMetaDataService]
    });
  });

  it('should be created', inject([DbMetaDataService], (service: DbMetaDataService) => {
    expect(service).toBeTruthy();
  }));
});
