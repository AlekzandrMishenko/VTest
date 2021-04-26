import { TestBed } from '@angular/core/testing';

import { TariffsService } from './tariffs.service';

describe('TariffsService', () => {
  let service: TariffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new TariffsService(null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
