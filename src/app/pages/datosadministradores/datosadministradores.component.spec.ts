import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosadministradoresComponent } from './datosadministradores.component';

describe('DatosadministradoresComponent', () => {
  let component: DatosadministradoresComponent;
  let fixture: ComponentFixture<DatosadministradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosadministradoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosadministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
