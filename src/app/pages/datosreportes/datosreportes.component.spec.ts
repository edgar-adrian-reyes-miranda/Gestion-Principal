import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosreportesComponent } from './datosreportes.component';

describe('DatosreportesComponent', () => {
  let component: DatosreportesComponent;
  let fixture: ComponentFixture<DatosreportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosreportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
