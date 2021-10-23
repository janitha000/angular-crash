import { TestBed } from '@angular/core/testing';

import { TaskObsStateService } from './task-obs-state.service';

describe('TaskObsStateService', () => {
  let service: TaskObsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskObsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
