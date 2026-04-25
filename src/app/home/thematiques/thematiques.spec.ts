import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thematiques } from './thematiques';

describe('Thematiques', () => {
  let component: Thematiques;
  let fixture: ComponentFixture<Thematiques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thematiques],
    }).compileComponents();

    fixture = TestBed.createComponent(Thematiques);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
