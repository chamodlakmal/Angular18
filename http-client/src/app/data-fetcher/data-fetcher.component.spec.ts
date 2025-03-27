import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetcherComponent } from './data-fetcher.component';

import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('DataFetcherComponent', () => {
  let component: DataFetcherComponent;
  let fixture: ComponentFixture<DataFetcherComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFetcherComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataFetcherComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should make a call and update the data', () => {
    const mockresponse = { data: 'mock data' };
    component.getJsonData();

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(req.request.method).toEqual('GET');
    req.flush(mockresponse);

    expect(component.jsonData).toEqual(mockresponse);
  })
});
