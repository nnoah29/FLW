import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToWork } from './how-to-work';

describe('HowToWork', () => {
  let component: HowToWork;
  let fixture: ComponentFixture<HowToWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToWork],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
