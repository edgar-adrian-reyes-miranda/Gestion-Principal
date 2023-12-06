import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosreportesregistroComponent } from './datosreportesregistro.component';

describe('DatosreportesregistroComponent', () => {
  let component: DatosreportesregistroComponent;
  let fixture: ComponentFixture<DatosreportesregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosreportesregistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosreportesregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
