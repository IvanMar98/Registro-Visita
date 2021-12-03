import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDisponibilidadComponent } from './formulario-disponibilidad.component';

describe('FormularioDisponibilidadComponent', () => {
  let component: FormularioDisponibilidadComponent;
  let fixture: ComponentFixture<FormularioDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDisponibilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
