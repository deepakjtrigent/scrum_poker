import { TestBed } from '@angular/core/testing';

import { StoryPointService } from './story-point.service';

describe('StoryPointService', () => {
  let service: StoryPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
