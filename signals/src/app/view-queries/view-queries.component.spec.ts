import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueriesComponent } from './view-queries.component';

describe('ViewQueriesComponent', () => {
  let component: ViewQueriesComponent;
  let fixture: ComponentFixture<ViewQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
