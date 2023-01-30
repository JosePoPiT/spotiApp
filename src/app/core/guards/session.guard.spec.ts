import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SessionGuard } from './session.guard';
//TODO El describe es el titulo de la prueba
describe('Testing of session guard😝', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(SessionGuard);
  });
//TODO La primera pregunta del examen
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
