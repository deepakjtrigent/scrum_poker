import { TestBed } from '@angular/core/testing';

import { UserIdInterceptor } from './user-id.interceptor';

describe('UserIdInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserIdInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UserIdInterceptor = TestBed.inject(UserIdInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
