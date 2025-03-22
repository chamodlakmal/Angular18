import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanupComponent } from './cleanup.component';

describe('CleanupComponent', () => {
  let component: CleanupComponent;
  let fixture: ComponentFixture<CleanupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
