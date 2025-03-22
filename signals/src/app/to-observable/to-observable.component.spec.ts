import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToObservableComponent } from './to-observable.component';

describe('ToObservableComponent', () => {
  let component: ToObservableComponent;
  let fixture: ComponentFixture<ToObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
