import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntrackedComponent } from './untracked.component';

describe('UntrackedComponent', () => {
  let component: UntrackedComponent;
  let fixture: ComponentFixture<UntrackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UntrackedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UntrackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
