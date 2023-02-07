/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NodeServiceService } from './NodeService.service';

describe('Service: NodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeServiceService]
    });
  });

  it('should ...', inject([NodeServiceService], (service: NodeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
