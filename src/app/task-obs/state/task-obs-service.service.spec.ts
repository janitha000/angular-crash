import { TestBed } from '@angular/core/testing';

import { TaskObsServiceService } from './task-obs-service.service';

describe('TaskObsServiceService', () => {
  let service: TaskObsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskObsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
