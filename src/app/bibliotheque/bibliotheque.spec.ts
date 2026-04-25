import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bibliotheque } from './bibliotheque';

describe('Bibliotheque', () => {
  let component: Bibliotheque;
  let fixture: ComponentFixture<Bibliotheque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bibliotheque],
    }).compileComponents();

    fixture = TestBed.createComponent(Bibliotheque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
