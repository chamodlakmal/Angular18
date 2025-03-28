import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('UserService', () => {
  let userService: UserService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    userService = TestBed.inject(UserService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  }
  );

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

    userService.fetchUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
      expect(users.length).toBe(mockUsers.length);
      expect(users[0].name).toBe(mockUsers[0].name);
      expect(users[1].name).toBe(mockUsers[1].name);
      expect(users[0].id).toBe(mockUsers[0].id);
      expect(users[1].id).toBe(mockUsers[1].id);
    });

    const req = httpTesting.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  })

  it('should handle error response', () => {
    userService.fetchUsers().subscribe({
      next: () => fail('should have failed with a 500 error'),
      error: (error) => {
        expect(error.status).toBe(500);
      }
    });

    const req = httpTesting.expectOne('https://jsonplaceholder.typicode.com/users');
    req.flush('Something went wrong', { status: 500, statusText: 'Server Error' });
  });

  it('should handle empty response', () => {
    userService.fetchUsers().subscribe(users => {
      expect(users).toEqual([]);
    });

    const req = httpTesting.expectOne('https://jsonplaceholder.typicode.com/users');
    req.flush([]);
  }
  );

  it('should handle network error', () => {
    userService.fetchUsers().subscribe({
      next: () => fail('should have failed with a network error'),
      error: (error) => {
        expect(error.status).toBe(0);
        expect(error.statusText).toBe('Unknown Error');
      }
    });

    const req = httpTesting.expectOne('https://jsonplaceholder.typicode.com/users');
    req.flush('Network error', { status: 0, statusText: 'Unknown Error' });
  });
});
