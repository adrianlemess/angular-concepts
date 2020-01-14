import { TestBed } from '@angular/core/testing';

import { MessageServiceSubject } from './message.service';

describe('MessageServiceSubject', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageServiceSubject = TestBed.get(MessageServiceSubject);
    expect(service).toBeTruthy();
  });
});
