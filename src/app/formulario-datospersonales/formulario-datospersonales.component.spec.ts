import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDatospersonalesComponent } from './formulario-datospersonales.component';

describe('FormularioDatospersonalesComponent', () => {
  let component: FormularioDatospersonalesComponent;
  let fixture: ComponentFixture<FormularioDatospersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDatospersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDatospersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
