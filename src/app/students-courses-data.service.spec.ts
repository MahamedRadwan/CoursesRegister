import { TestBed } from '@angular/core/testing';

import { StudentsCoursesDataService } from './students-courses-data.service';

describe('StudentsCoursesDataService', () => {
  let service: StudentsCoursesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsCoursesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
