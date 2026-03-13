import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gatepass } from './gatepass';

describe('Gatepass', () => {
  let component: Gatepass;
  let fixture: ComponentFixture<Gatepass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gatepass],
    }).compileComponents();

    fixture = TestBed.createComponent(Gatepass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
